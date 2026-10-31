export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const organisation = String(body.organisation || '').trim();
  const message = String(body.message || '').trim();
  const website = String(body.website || '').trim();

  // Quietly accept bot submissions caught by the hidden honeypot.
  if (website) return res.status(200).json({ ok: true });

  if (!name || name.length > 120 || !email || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      organisation.length > 160 || !message || message.length > 5000) {
    return res.status(400).json({ error: 'Please check your details and try again.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form is missing the RESEND_API_KEY environment variable.');
    return res.status(503).json({ error: 'The enquiry service is not configured yet. Please email info@krmhcs.co.za directly.' });
  }

  const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOrganisation = escapeHtml(organisation || 'Not provided');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'KRM Website <website@krmhcs.co.za>',
        to: ['info@krmhcs.co.za'],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Organisation:</strong> ${safeOrganisation}</p>
          <p><strong>Message:</strong><br>${safeMessage}</p>
        `,
        text: `New website enquiry\n\nName: ${name}\nEmail: ${email}\nOrganisation: ${organisation || 'Not provided'}\n\nMessage:\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      const details = await emailResponse.text();
      console.error('Resend rejected contact enquiry:', details);
      return res.status(502).json({ error: 'We could not send your enquiry right now. Please email info@krmhcs.co.za directly.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return res.status(502).json({ error: 'We could not send your enquiry right now. Please email info@krmhcs.co.za directly.' });
  }
}
