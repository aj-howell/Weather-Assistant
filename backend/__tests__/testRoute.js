const request = require("supertest");
const app =  require("../app.js");
const fs = require("fs");

// Integeration Test - Image routes
describe('Testing Image routes', () => {
    test('result should be a string',  async() => {
        const image = await fs.readFileSync("C:/Users/anazj/Downloads/book.jpg");
       
        const base64String = Buffer.from(image).toString('base64');

        const result = await request(app) //setup the request that you would send
        .post("/images")
        .set("content-type", "application/json")
        .send({
            photoPath: base64String
        });

        const parsedResult = new String(result.text);

        //what response should we expect
        expect(parsedResult).toBeInstanceOf(String);
    }, 10000)
});