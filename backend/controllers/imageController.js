var gemini = require('../models/gemini.js')


const generatePictureDescription = async(req, res) => 
{
     const photoPath = req.body.photoPath;
     
   try {
        const result = await gemini.sendPhoto(photoPath);
        res.send(result);
   } catch (error) {
       res.send(error);
   }
}

module.exports = {generatePictureDescription}