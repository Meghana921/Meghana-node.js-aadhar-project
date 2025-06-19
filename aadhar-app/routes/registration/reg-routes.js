const express = require('express');
const router = express.Router();
const {insert_aadhar}= require('./reg-ctrl');

router.post('/insert_aadhar',insert_aadhar);


module.exports = router;