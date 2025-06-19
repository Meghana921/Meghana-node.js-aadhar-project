const express = require('express');
const router = express.Router();
const registration_routes = require("./registration/reg-routes")
const sendBirthdayEmails = require('./utilities/utilities');


router.use('/aadhar',registration_routes)

router.post('/trigger-birthday-emails', async (req, res) => {
    try {
        await sendBirthdayEmails();
        res.json({ success: true, message: 'Birthday emails triggered successfully' });
    } catch (error) {
        console.error('Error triggering emails:', error);
        res.status(500).json({ success: false, error: 'Failed to trigger emails' });
    }
});
module.exports = router;