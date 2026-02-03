// Express server for handling contact form submissions
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// API endpoint for form submissions
app.post('/api/contact', async (req, res) => {
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
    await resend.emails.send({
      from: 'website@revoutilities.com',
      to: process.env.BUSINESS_EMAIL,
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

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'reducemybills@revo-utilities.com',
      to: email,
      subject: 'Thank you for your enquiry - Revo Utilities',
      html: `
        <h2>Thank you for your enquiry, ${name}!</h2>
        <p>We've received your utilities comparison request for ${businessName}.</p>
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
});

// Proxy CRM endpoint to avoid browser CORS restrictions
app.post('/api/crm', async (req, res) => {
  try {
    const response = await fetch('https://utilities.maine-stream.com/api/public/webhook/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_CRM_WEBHOOK_KEY || '',
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
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Contact form server running on port ${PORT}`);
});
