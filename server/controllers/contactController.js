const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const path = require('path');
const { adminNotificationTemplate, visitorAutoResponderTemplate } = require('../utils/emailTemplates');

const handleContactForm = async (req, res) => {
    try {
        // 1. Validate the incoming request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName, email, inquiryType, message } = req.body;
        const fullName = `${firstName} ${lastName}`;

        // 2. Initialize Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 3. Setup email options

        const adminMailOptions = {
            from: `"${fullName}" <${email}>`,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Inquiry from ${fullName}: ${inquiryType}`,
            html: adminNotificationTemplate({ firstName, lastName, email, inquiryType, message })
        };

        const visitorMailOptions = {
            from: `"Momley AGS Life Science" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting Momley AGS Life Science',
            html: visitorAutoResponderTemplate({ firstName, lastName })
        };

        // 4. Send the emails concurrently
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(visitorMailOptions)
        ]);

        // 5. Send success response
        res.status(200).json({ message: 'Your message has been sent successfully.' });

    } catch (error) {
        console.error('Error in handleContactForm:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
};

module.exports = {
    handleContactForm
};
