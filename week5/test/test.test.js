const expect = require("chai").expect;
const request = require("request");

const baseUrl = "http://localhost:3000";

describe("Server & API Tests", function () {

    it("should return status 200 from root", function (done) {
        request(baseUrl, function (error, response, body) {
            expect(response && response.statusCode).to.equal(200);
            done();
        });
    });

    it("should return projects from /api/projects", function (done) {
        request(`${baseUrl}/api/projects`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            const jsonBody = JSON.parse(body);
            expect(jsonBody).to.have.property("statusCode", 200);
            expect(jsonBody).to.have.property("data");
            expect(jsonBody.data).to.be.an("array");
            done();
        });
    });



    it("should handle missing parameters in /add", function (done) {
        request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    it("should return error for non-numeric input in /add", function (done) {
        request.get(`${baseUrl}/add?a=hello&b=world`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });
});
