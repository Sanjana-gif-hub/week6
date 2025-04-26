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

    // Testing /add route for valid inputs
    it("should return sum of numbers from /add", function (done) {
        request.get(`${baseUrl}/add?a=10&b=20`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("The sum of 10 and 20 is: 30");
            done();
        });
    });

    // Testing for missing parameters in /add
    it("should handle missing parameters in /add", function (done) {
        request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    // Testing /subtract route for valid inputs
    it("should return difference of numbers from /subtract", function (done) {
        request.get(`${baseUrl}/subtract?a=20&b=5`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("The difference of 20 and 5 is: 15");
            done();
        });
    });

    // Testing for invalid non-numeric input in /subtract
    it("should return error for non-numeric input in /subtract", function (done) {
        request.get(`${baseUrl}/subtract?a=hello&b=world`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    // Testing /multiply route for valid inputs
    it("should return product of numbers from /multiply", function (done) {
        request.get(`${baseUrl}/multiply?a=4&b=5`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("The product of 4 and 5 is: 20");
            done();
        });
    });

    // Testing for non-numeric input in /multiply
    it("should return error for non-numeric input in /multiply", function (done) {
        request.get(`${baseUrl}/multiply?a=4&b=hello`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    // Testing /add route with large numbers
    it("should handle large numbers for /add", function (done) {
        request.get(`${baseUrl}/add?a=1000000000&b=2000000000`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("The sum of 1000000000 and 2000000000 is: 3000000000");
            done();
        });
    });

    // Testing /add route for special characters
    it("should return error for special characters in /add", function (done) {
        request.get(`${baseUrl}/add?a=!@#&b=world`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    // Testing for invalid data types (array, object)
    it("should return error for invalid data types in /add", function (done) {
        request.get(`${baseUrl}/add?a=[1,2]&b={}`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

    // Edge case for subtraction with large negative numbers
    it("should handle large negative numbers for /subtract", function (done) {
        request.get(`${baseUrl}/subtract?a=-1000000000&b=-2000000000`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("The difference of -1000000000 and -2000000000 is: 1000000000");
            done();
        });
    });

    // Edge case for multiplication with special characters
    it("should return error for special characters in /multiply", function (done) {
        request.get(`${baseUrl}/multiply?a=10&b=*&c=20`, function (error, response, body) {
            expect(response.statusCode).to.not.equal(200);
            done();
        });
    });

});
