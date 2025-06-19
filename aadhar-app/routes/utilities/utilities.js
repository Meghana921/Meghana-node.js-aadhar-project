const nodemailer = require('nodemailer');
const pool = require('../../db');
const moment = require('moment');
const env= require('../../env.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.EMAIL_USER , 
        pass: env.Email_PASS 
    }
});


async function  sendBirthdayEmails(){
    try {
        const current_date = moment().format('MM-DD');

        const [rows] = await pool.query(
            `SELECT first_name, email_id FROM aadhar_holders
             WHERE DATE_FORMAT(dob, "%m-%d") = ?`,
            [current_date]
        )

        for (const user of rows) {
            try {
                const mailOptions = {
                    from: 'meghana.s8150@gmail.com',
                    to: user.email_id,
                    subject: `Happy Birthday ${user.first_name}!`,
                    text: `Wish you a very happy birthday.\n\nBest wishes from Aadhar Team.`
                };

                await transporter.sendMail(mailOptions);
                console.log(`Successfully sent birthday email to ${user.email_id}`);
            } catch (emailError) {
                console.error(`Failed to send email to ${user.email_id}:`, emailError);
            }
        }

    } catch (error) {
        console.error('Error in birthday email scheduler:', error);
    }
};


module.exports = sendBirthdayEmails