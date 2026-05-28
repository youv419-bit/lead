export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { lead, type, tone } = req.body;

  const toneMap = {
    professional: 'formal and professional',
    friendly: 'warm, friendly and conversational',
    direct: 'direct, concise and to the point',
    value: 'value-first, leading with benefits'
  };

  const prompts = {
    email: `You are an expert cold email copywriter. Write a cold email to convert a potential client.
Lead info: Company: ${lead.company}, Contact: ${lead.name}, Platform: ${lead.platform}, Industry: ${lead.industry}, Location: ${lead.location}, Website: ${lead.website || 'N/A'}.
Tone: ${toneMap[tone] || 'professional'}.
Write a subject line and email body. The sender is a freelance Shopify & WordPress developer.
Focus on their pain points, offer specific value. Keep it under 150 words. Include a clear CTA.
Format: SUBJECT: [subject]\n\nBODY: [email body]`,

    linkedin: `Write a LinkedIn DM to connect with a potential client.
Lead: ${lead.name} at ${lead.company}, uses ${lead.platform}, in ${lead.industry} industry, ${lead.location}.
Tone: ${toneMap[tone] || 'friendly'}. Max 80 words. No fluff. Mention something specific about their business.
The sender is a Shopify & WordPress developer offering to help grow their online store.`,

    followup: `Write a 3-part follow-up email sequence for a lead who hasn't replied.
Lead: ${lead.name} at ${lead.company}, ${lead.platform} user, ${lead.industry}, ${lead.location}.
Follow up 1 (Day 3): Gentle reminder, add new value point.
Follow up 2 (Day 7): Share a relevant case study or result.
Follow up 3 (Day 14): Final breakup email.
Format each as: FOLLOW-UP [N] - Day [X]:\n[content]`,

    whatsapp: `Write a WhatsApp/SMS message for cold outreach. Max 50 words. Very casual and human.
Lead: ${lead.name} at ${lead.company}, uses ${lead.platform}, ${lead.location}.
Sender is a Shopify & WordPress developer. Make it feel like a genuine human message, not spam.`
  };

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompts[type] || prompts.email }]
      })
    });
    const data = await response.json();
    res.status(200).json({ content: data.content[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
