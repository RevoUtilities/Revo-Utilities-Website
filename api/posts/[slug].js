// GET /api/posts/[slug] - stub endpoint until Microsoft Graph is configured
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, Authorization, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query || {};

  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET, SITE_ID, LIST_ID } = process.env;
  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SITE_ID || !LIST_ID) {
    // Not configured yet – return 404 so client can fall back gracefully
    res.setHeader('Cache-Control', 'no-store');
    return res.status(404).json({ error: 'Not configured' });
  }

  // Placeholder: once configured, fetch single post by slug via Microsoft Graph here.
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
  return res.status(404).json({ error: `Post not found: ${slug}` });
}
