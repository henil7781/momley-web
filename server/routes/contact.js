const express = require('express');
const { body } = require('express-validator');
const { handleContactForm } = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact
// Validation middleware attached to the route
router.post(
    '/',
    [
        body('firstName').trim().notEmpty().withMessage('First name is required.'),
        body('lastName').trim().notEmpty().withMessage('Last name is required.'),
        body('email').isEmail().withMessage('Valid email is required.').normalizeEmail(),
        body('inquiryType').trim().notEmpty().withMessage('Inquiry type is required.'),
        body('message').trim().notEmpty().withMessage('Message is required.')
    ],
    handleContactForm
);

module.exports = router;
