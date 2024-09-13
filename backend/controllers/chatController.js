const gemini = require('../models/gemini.js');


const sendMessage = async(req, res)=>
{   
    const message = req.body.message;
    const text = await gemini.sendChat(message);

    res.send(text);
}

module.exports = {sendMessage};