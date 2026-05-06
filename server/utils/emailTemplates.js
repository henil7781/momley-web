const adminNotificationTemplate = ({ firstName, lastName, email, inquiryType, message }) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; background-color: #f8fafc; color: #0f172a; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; }
        .header { border-bottom: 2px solid #fb7185; padding-bottom: 10px; margin-bottom: 20px; }
        h2 { color: #0f172a; margin: 0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .value { margin-top: 5px; font-size: 16px; color: #334155; }
        .message-box { background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 10px; font-style: italic; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.ibb.co/nNZjhYTS/momley-logo.png" alt="Momley AGS Life Science" style="height: 45px; margin-bottom: 10px;" />
            <h2>New Website Inquiry</h2>
        </div>
        
        <div class="field">
            <div class="label">Name</div>
            <div class="value">${firstName} ${lastName}</div>
        </div>
        
        <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}" style="color: #fb7185;">${email}</a></div>
        </div>
        
        <div class="field">
            <div class="label">Inquiry Type</div>
            <div class="value">${inquiryType}</div>
        </div>
        
        <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
        </div>
    </div>
</body>
</html>
`;

const visitorAutoResponderTemplate = ({ firstName, lastName }) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; background-color: #fdfdfd; color: #0f172a; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .logo { margin-bottom: 30px; }
        h1 { font-size: 24px; color: #0f172a; margin-bottom: 20px; }
        p { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 20px; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://i.ibb.co/nNZjhYTS/momley-logo.png" alt="Momley AGS Life Science" style="height: 45px;" />
        </div>
        
        <h1>Thank you for reaching out, ${firstName} ${lastName}.</h1>
        
        <p>We have successfully received your message. Our clinical support and distribution teams are currently reviewing your inquiry and will get back to you as soon as possible, typically within 1-2 business days.</p>
        
        <p>At Momley AGS Life Science, we are committed to providing medical excellence and robust support for all our partners and patients.</p>
        
        <p>Best Regards,<br><strong>Team Momley </strong></p>
        
        <div class="footer">
            Momley AGS Life Science<br/>+91 9328184047<br/>131-132, Sun Gravitas, Ahmedabad, Gujarat, India 380015<br/><a href="mailto:momleyagslifescience@gmail.com" style="color: #fb7185; text-decoration: none;">momleyagslifescience@gmail.com</a>
        </div>
    </div>
</body>
</html>
`;

module.exports = {
    adminNotificationTemplate,
    visitorAutoResponderTemplate
};
