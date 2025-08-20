// POST /api/revalidate - accepts a secret, acts as a no-op placeholder for cache invalidation
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, Authorization, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : (req.body && req.body.secret);

  if (!process.env.VERCEL_REVALIDATE_SECRET) {
    // Not configured: accept but do nothing
    return res.status(200).json({ ok: true, message: 'Revalidate secret not configured; no-op' });
  }

  if (token !== process.env.VERCEL_REVALIDATE_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // No-op for now; future: integrate Vercel cache purge or increment a KV version key
  return res.status(200).json({ ok: true });
}
