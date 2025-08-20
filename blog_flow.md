Your “Blog” Microsoft List

Create a List called “Blog”. Add these columns:

Required
• Title — Single line of text
• Slug — Single line of text (auto-filled by flow)
• BodyMarkdown or BodyHtml — Multiple lines. Pick one and stick to it
• Excerpt — Multiple lines of text
• Author — Person or Group
• PublishedAt — Date and time
• Approved — Yes/No

SEO and extras
• SeoTitle — Single line of text
• SeoDescription — Multiple lines of text
• Tags — Single line of text, comma separated
• CoverImageUrl — Hyperlink
• CanonicalUrl — Hyperlink
• Category — Choice
• ReadingTime — Number

Images
• Create a SharePoint document library called “blog-assets”
• Store images there and save the public-ish sharing link or CDN path in CoverImageUrl
• If you prefer, allow List attachments, then have your flow upload the attachment to blog-assets and write back the final URL

Authoring paths 1. Write in Word with Copilot
• Authors draft in Word stored in a “Blog Drafts” SharePoint folder
• Use simple headings and image inserts
• On “Ready” they set a document property or filename flag like “\_approved”
• Power Automate converts to HTML or Markdown, uploads images to blog-assets, creates or updates the List item 2. Write directly in the List
• Use BodyHtml rich text and paste images via the flow as above
• Lighter process, less Word conversion logic

Power Automate flow outline

Trigger
• When a file is created or modified in “Blog Drafts” OR when a List item is created or modified where Status == Ready

Steps 1. If using Word: Convert file to HTML. Extract images, upload to blog-assets, swap image src to their final URLs 2. Build slug from Title (lowercase, hyphens, strip punctuation). Handle collisions by adding a suffix 3. Upsert a row in “Blog” List with Title, Slug, BodyHtml or BodyMarkdown, Excerpt, Author, Tags, CoverImageUrl, PublishedAt, Seo fields, Approved = Yes 4. HTTP POST to your site’s /api/revalidate with a secret so the cache clears and the post appears instantly

Next.js side (reads direct from Graph)
• App registration in Entra ID with Sites.Read.All or Lists.Read.All
• Store TENANT_ID, CLIENT_ID, CLIENT_SECRET, SITE_ID, LIST_ID in env on Vercel
• Route handler examples:
• /api/posts fetches approved items: $filter=fields/Approved eq 1&$orderby=fields/PublishedAt desc
• /api/posts/[slug] fetches a single item: $filter=fields/Slug eq 'the-slug'
• Cache responses for a couple of minutes and add a /api/revalidate endpoint that your flow hits after publish

Rendering notes
• If you keep Markdown in the List, parse with remark and sanitize
• If you keep HTML, sanitize with rehype-sanitize
• Use next/image for CoverImageUrl

Why Lists instead of Excel
• Lists gives types, permissions, versioning, approvals, person fields, and easy Power Automate actions
• Excel works, but concurrency, typing, and approvals are messier

Quick checklist to build this
• Make the “Blog” List with the columns above
• Create “blog-assets” library
• Build the Power Automate flow to convert, upload images, upsert List item, and call your revalidate endpoint
• Add two Next.js routes to read from Graph and render pages
• Test end to end with one draft
