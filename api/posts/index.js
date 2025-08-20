// GET /api/posts - stub endpoint until Microsoft Graph is configured
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

  // Check if Microsoft Lists integration is configured
  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET, SITE_ID, LIST_ID } = process.env;

  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SITE_ID || !LIST_ID) {
    // Not configured yet – return a clear message and empty list
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json([]);
  }

  // Placeholder: once configured, fetch via Microsoft Graph here.
  // For now, return empty list with short cache to be polite.
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
  return res.status(200).json([]);
}
