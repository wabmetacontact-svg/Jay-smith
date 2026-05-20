const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { name, email, inquiryType, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
        }

        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

        // Retrieve SMTP settings from environment variables
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env;

        // Check if SMTP is configured
        const isSmtpConfigured = SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_TO;

        if (!isSmtpConfigured) {
            console.warn('--- DRY RUN SUBMISSION ---');
            console.warn(`Name: ${name}`);
            console.warn(`Email: ${email}`);
            console.warn(`Inquiry Type: ${inquiryType || 'General'}`);
            console.warn(`Message: ${message}`);
            console.warn('SMTP settings are missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_TO in your environment variables to enable email notifications.');
            console.warn('--------------------------');

            return res.status(200).json({
                success: true,
                dryRun: true,
                message: 'Form submission received (Dry Run mode, SMTP not configured).'
            });
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT, 10),
            secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // Construct HTML email content
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                        color: #181211;
                        background-color: #f8f6f5;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 40px auto;
                        background-color: #ffffff;
                        border: 2px solid #181211;
                        box-shadow: 8px 8px 0px #f23b0d;
                        padding: 40px;
                    }
                    .header {
                        border-bottom: 2px solid #181211;
                        padding-bottom: 20px;
                        margin-bottom: 30px;
                    }
                    .header h1 {
                        font-size: 28px;
                        font-weight: 900;
                        text-transform: uppercase;
                        letter-spacing: -0.05em;
                        margin: 0;
                    }
                    .header span {
                        color: #f23b0d;
                    }
                    .field-title {
                        font-size: 11px;
                        font-weight: 900;
                        text-transform: uppercase;
                        letter-spacing: 0.15em;
                        color: #181211;
                        opacity: 0.6;
                        margin-bottom: 6px;
                    }
                    .field-value {
                        font-size: 16px;
                        font-weight: bold;
                        color: #181211;
                        margin-bottom: 24px;
                        background-color: #f8f6f5;
                        padding: 12px;
                        border-left: 4px solid #f23b0d;
                    }
                    .message-box {
                        font-size: 15px;
                        line-height: 1.6;
                        color: #181211;
                        background-color: #f8f6f5;
                        padding: 16px;
                        border-left: 4px solid #f23b0d;
                        margin-bottom: 24px;
                        white-space: pre-wrap;
                    }
                    .footer {
                        border-top: 2px solid #181211;
                        padding-top: 20px;
                        margin-top: 40px;
                        font-size: 11px;
                        font-weight: bold;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        opacity: 0.5;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Inquiry For <span>Jay Smith</span></h1>
                    </div>
                    
                    <div class="field-title">Sender Name</div>
                    <div class="field-value">${name.toUpperCase()}</div>
                    
                    <div class="field-title">Email Address</div>
                    <div class="field-value">${email.toLowerCase()}</div>
                    
                    <div class="field-title">Inquiry Type</div>
                    <div class="field-value">${(inquiryType || 'GENERAL INQUIRY').toUpperCase()}</div>
                    
                    <div class="field-title">Message</div>
                    <div class="message-box">${message}</div>
                    
                    <div class="field-title">Submission Timestamp</div>
                    <div class="field-value">${timestamp} UTC</div>
                    
                    <div class="footer">
                        Sent from Portfolio Website Contact Form
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${SMTP_USER}>`, // Sender details (usually authenticated user email is required by SMTP servers)
            to: SMTP_TO,
            replyTo: email, // Set reply-to to the visitor's email address
            subject: `[Portfolio Inquiry] ${inquiryType || 'General'} - ${name}`,
            html: htmlContent,
            text: `New Portfolio Inquiry:\n\nName: ${name}\nEmail: ${email}\nType: ${inquiryType || 'General'}\n\nMessage:\n${message}\n\nTimestamp: ${timestamp} UTC`,
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
        console.error('Error handling contact form submission:', error);
        return res.status(500).json({ success: false, error: 'Internal server error. Failed to send message.' });
    }
};
