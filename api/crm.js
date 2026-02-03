export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://utilities.maine-stream.com/api/public/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key':
          process.env.CRM_WEBHOOK_KEY ||
          process.env.VITE_CRM_WEBHOOK_KEY ||
          process.env.NEXT_PUBLIC_CRM_WEBHOOK_KEY ||
          '',
      },
      body: JSON.stringify(req.body ?? {}),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json(payload || { error: 'Failed to submit enquiry' });
    }

    return res.json(payload);
  } catch (error) {
    console.error('CRM submission error:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry' });
  }
}
