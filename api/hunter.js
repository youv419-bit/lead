export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { apiKey, domain, firstName, lastName } = req.body;
  if (!apiKey) return res.status(400).json({ error: 'API key required' });

  try {
    let url = '';
    if (domain && firstName && lastName) {
      url = `https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${firstName}&last_name=${lastName}&api_key=${apiKey}`;
    } else if (domain) {
      url = `https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=${apiKey}&limit=5`;
    }
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
