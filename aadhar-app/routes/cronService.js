const cron = require('node-cron');
const sendBirthdayEmails = require('./utilities/utilities');



async function setupCronJobs () {
    cron.schedule('22 17 * * *', async () => {
        try {
            await sendBirthdayEmails();
      
        } catch (error) {
            
        }
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata" 
    });

 
};

module.exports = setupCronJobs;