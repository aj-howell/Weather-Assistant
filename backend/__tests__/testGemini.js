const gemini = require("../models/gemini");
const fs = require('fs').promises; // Use promise-based fs API

const testChat = async (prompt) => {
    const res = new String(await gemini.sendChat(prompt));
    return res;
};

describe('testing Gemini API Chat', () => {
    test('result should be a string',  async() => {
        const result = await testChat("Hello my name is aj");
        expect(result).toBeInstanceOf(String);

        const result2 = await testChat("What is your name?");
        expect(result2).toBeInstanceOf(String);

    });
});

const testPrompt = async (prompt) => {
    const res = new String(await gemini.sendPrompt(prompt));
    return res;
};

//testing needs to happen in this format -> using jest 
describe('testing Gemini API Prompt', () => {
    test('result should be a string',  async() => {
        const result = await testPrompt("Hello my name is aj");
        expect(result).toBeInstanceOf(String);
    });
});

const testPhoto = async(base64String) => {
    const res = new String(await gemini.sendPhoto(base64String));
    return res;
}

describe('testing Gemini API File Processing', () => {
    test('result should be a string',  async() => {
        
        //simulating getting file from device & creating a base64 string to send over
        const image = await fs.readFile("C:/Users/anazj/Downloads/laptop.png");
        const buff = Buffer.from(image).toString('base64')

        console.log("this is the string: "+buff);

        const result = await testPhoto(buff);

       // console.log(result);
        
        expect(result).toBeInstanceOf(String);
    }, 10000);
});
