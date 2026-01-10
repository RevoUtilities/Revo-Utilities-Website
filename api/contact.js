import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
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
    const {
      name,
      businessName,
      email,
      phone,
      currentSupplier,
      marketingOptIn,
      enquiryType,
      message,
    } = req.body || {};

    const resolvedEnquiryType =
      typeof enquiryType === 'string' && enquiryType.trim()
        ? enquiryType.trim()
        : 'Utilities Comparison';

    const requiresCurrentSupplier = !enquiryType;

    if (!name || !businessName || !email || !phone || (requiresCurrentSupplier && !currentSupplier)) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to your business
    const businessEmail = process.env.BUSINESS_EMAIL || 'reducemybills@revo-utilities.com';
    console.log('Sending business notification to:', businessEmail);

    const businessEmailResult = await resend.emails.send({
      from: 'website@revo-utilities.com',
      to: businessEmail,
      subject: `New Website Enquiry (${resolvedEnquiryType})`,
      html: `
        <h2>New Enquiry from Website</h2>
        <p><strong>Enquiry type:</strong> ${resolvedEnquiryType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${requiresCurrentSupplier ? `<p><strong>Current Supplier:</strong> ${currentSupplier}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <p><strong>Marketing opt-in:</strong> ${marketingOptIn ? 'Yes' : 'No'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-GB')}</p>
      `
    });

    console.log('Business email result:', businessEmailResult);

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'reducemybills@revo-utilities.com',
      to: email,
      subject: 'Thank you for your enquiry - Revo Utilities',
      html: `
        <h2>Thank you for your enquiry, ${name}!</h2>
        <p>We've received your enquiry${resolvedEnquiryType ? ` regarding ${resolvedEnquiryType}` : ''} for ${businessName}.</p>
        <p>Our team will review your requirements and get back to you within 24 hours with a tailored quote.</p>
        <p>If you have any urgent questions, please call us on <strong>0141 280 9986</strong>.</p>
        <br>
        <p>Best regards,<br>The Revo Utilities Team</p>
      `
    });

    return res.json({ success: true, message: 'Enquiry submitted successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry' });
  }
}
