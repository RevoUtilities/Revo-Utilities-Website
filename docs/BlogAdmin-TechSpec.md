# Technical Specification: Blog Admin Page (`BlogAdmin.tsx`)

## Overview

The `BlogAdmin.tsx` page is a React component that provides an admin interface for creating and publishing new blog posts. It is intended for authenticated users (admins/editors) and should be protected behind an authentication wall in the backend CRM. The backend will be responsible for handling blog post creation, author management, tag management, and image storage/validation.

---

## Functional Requirements

### 1. **Authentication & Authorization**
- **Requirement:** Only authenticated users with appropriate permissions (e.g., admin, editor) can access the blog admin interface and create posts.
- **Backend:** Must provide authentication (e.g., JWT, session, OAuth) and enforce authorization for all blog admin endpoints.

### 2. **Blog Post Creation**
- **Fields Required:**
  - `title` (string, required): The blog post title.
  - `excerpt` (string, required): A short summary of the post.
  - `content` (string, required): The main content of the post (HTML supported).
  - `author` (object, required): Author's name and avatar URL.
  - `imageUrl` (string, optional): URL to the featured image.
  - `tags` (array of strings, optional): List of tags for the post.

- **Frontend Behavior:** 
  - Validates required fields before submission.
  - Shows error messages for missing/invalid fields.
  - Shows a loading state while publishing.

- **Backend Endpoint:**
  - **POST** `/api/blog/posts`
    - **Request Body:**
      ```json
      {
        "title": "string",
        "excerpt": "string",
        "content": "string",
        "author": {
          "name": "string",
          "avatarUrl": "string"
        },
        "imageUrl": "string",
        "tags": ["string", ...]
      }
      ```
    - **Response:**
      - `201 Created` with the new post object (including a unique `slug` for navigation).
      - On error, return appropriate status and error message.

### 3. **Author Management**
- **Frontend:** Uses a pre-defined list of authors (name + avatar URL).
- **Backend:** Should provide an endpoint to fetch available authors for the dropdown.
  - **GET** `/api/blog/authors`
    - **Response:**
      ```json
      [
        { "name": "string", "avatarUrl": "string" },
        ...
      ]
      ```
- **Note:** If author management is dynamic, allow adding/editing authors in the CRM.

### 4. **Tag Management**
- **Frontend:** Uses a pre-defined list of common tags, but allows custom tags.
- **Backend:** Should provide an endpoint to fetch common tags.
  - **GET** `/api/blog/tags`
    - **Response:**
      ```json
      ["energy", "cost-saving", ...]
      ```
- **Custom Tags:** Any string entered by the user should be accepted and stored.

### 5. **Image Handling**
- **Frontend:** Accepts a direct image URL.
- **Backend:**
  - Should validate the image URL (optional: download and store image, or verify format/size).
  - Optionally, provide an image upload endpoint for direct uploads:
    - **POST** `/api/blog/images`
      - Accepts multipart/form-data.
      - Returns a public URL to the uploaded image.

### 6. **Slug Generation & Navigation**
- **Backend:** Generates a unique slug for each post (e.g., based on title).
- **Frontend:** Navigates to `/blog/{slug}` after successful creation.

### 7. **Error Handling**
- **Backend:** Returns clear error messages and appropriate HTTP status codes for validation errors, auth failures, or server errors.
- **Frontend:** Displays error messages to the user.

---

## API Endpoints Summary

| Method | Endpoint              | Description                        | Auth Required | Request Body / Params         | Response Example                |
|--------|-----------------------|------------------------------------|--------------|------------------------------|---------------------------------|
| GET    | `/api/blog/authors`   | List available authors             | Yes          | —                            | `[{"name": "...", "avatarUrl": "..."}]` |
| GET    | `/api/blog/tags`      | List common tags                   | Yes          | —                            | `["energy", "cost-saving", ...]`|
| POST   | `/api/blog/posts`     | Create a new blog post             | Yes          | Blog post object (see above) | `{ "slug": "my-blog-title", ... }` |
| POST   | `/api/blog/images`    | (Optional) Upload an image         | Yes          | multipart/form-data           | `{ "url": "https://..." }`      |

---

## Data Model Example

### Blog Post
```json
{
  "id": "string",
  "title": "How to Save on Energy Bills",
  "excerpt": "Quick tips to reduce your energy costs.",
  "content": "<p>...</p>",
  "author": {
    "name": "Sarah Johnson",
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  "imageUrl": "https://example.com/image.jpg",
  "tags": ["energy", "cost-saving", "uk-market"],
  "slug": "how-to-save-on-energy-bills",
  "createdAt": "2024-06-01T12:00:00Z",
  "updatedAt": "2024-06-01T12:00:00Z"
}
```

---

## Validation Rules

- **Title, Excerpt, Content:** Required, non-empty strings.
- **Author:** Must match an existing author (or allow custom if needed).
- **Image URL:** Optional, but if provided, should be a valid URL (and optionally, a valid image).
- **Tags:** Array of strings, can be empty or contain custom values.

---

## Security & Access

- All endpoints must require authentication (e.g., via JWT in headers or session cookies).
- Only users with the correct role/permission can create posts or upload images.
- Input should be sanitized to prevent XSS/HTML injection (especially for `content`).

---

## Additional Notes

- **HTML Content:** The `content` field supports HTML. The backend should sanitize or validate HTML to prevent XSS.
- **Extensibility:** The backend should be designed to allow future features such as editing posts, deleting posts, or managing authors/tags.
- **Error Codes:** Use standard HTTP status codes (400 for validation, 401/403 for auth, 500 for server errors).

---

## Example Workflow

1. **Frontend loads `/blog-admin` page.**
2. **Fetches authors and tags** from `/api/blog/authors` and `/api/blog/tags`.
3. **User fills out the form** and submits.
4. **Frontend POSTs** the blog post data to `/api/blog/posts`.
5. **Backend validates, creates post, returns slug.**
6. **Frontend navigates to `/blog/{slug}`.**

---

## Questions for Backend Developer

- Will the backend support image uploads, or only accept URLs?
- Should authors/tags be managed dynamically, or are they static?
- What authentication method will be used (JWT, session, OAuth)?
- Should the backend support post-editing and deletion in the future?

---

**Contact:**  
For any questions or clarifications, please reach out to the frontend developer or project lead. 