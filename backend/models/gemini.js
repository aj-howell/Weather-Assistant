const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDTz5CAUngeSKOgiKcnq3KqW_Dnx_q3unQ"); // add an enviornment variable {API_KEY}
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); //future idea using this as a singleton


const sendChat = async (prompt) => {
    try {
        
        const chat = model.startChat({
            history: [
              // {role:string parts:[{type}]}
            ],
          });

        const result = await chat.sendMessage(prompt);
        const res = await result.response.text();
        
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const sendPrompt = async(prompt) => {
    try {

        const result = await model.generateContent(prompt);
        const res = await result.response.text();
        
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

//we're passing the bufferedString directly from frontend
function fileToGenerativePart(bufferString, mimeType) {
    return {
      inlineData: {
        data: bufferString,
        mimeType
      },
    };
  }

const sendPhoto = async(base64String) =>
{   
    try {
        const image = fileToGenerativePart(base64String, "image/png");
        const result = await model.generateContent(["Describe this photo in detail", image]);
        const res = await result.response.text();
        
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}

module.exports = { sendPhoto, sendPrompt, sendChat };
