const pool = require("../../db");


async function insert_aadhar(req,res){
    try{
            const {first_name,last_name,dob,mobile_number,email_id,address,city_id,state_id,emp_id
                     } = req.body;
            
            const [result] = await pool.query('CALL insert_aadhar(?, ?, ?, ?, ?, ?, ?, ?, ?)',
             [first_name, last_name,dob,mobile_number,email_id,address,city_id,state_id,emp_id]);
         
           if (result[0] && result[0][0] && result[0][0].error_message) {
                    console.log(result)
                     return res.status(400).json({ 
                     error: result[0][0].error_message 
            });
                }
            
            res.status(200).json({ 
            message: "Aadhar record inserted successfully" });
                    
        } catch(error) {
                    res.status(500).json({error:"Aadhar insertion failed","message":error.message});
                }
}


module.exports = {insert_aadhar}