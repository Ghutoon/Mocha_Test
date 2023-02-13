var expect = require("chai").expect;
var request = require("request");

describe("Status and content", function () {
  describe("Main page", function () {
    it("status", function (done) {
      request("http://localhost:8080/", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("content", function (done) {
      request("http://localhost:8080/", function (error, response, body) {
        expect(body).to.equal("Hello World");
        done();
      });
    });
  });
    

  describe("About page", function () {
    it("status", function (done) {
      request("http://localhost:8080/about", function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});


describe("Sum Page", function () {
  it("Sum of 2 numbers passed in body of request", function (done) {
    request.post(
      {
        url: "http://localhost:8080/sum",
        json: true,
        body: {
          number_1: 2,
          number_2: 3,
        },
      },
        function (error, response, body) {
        expect(body.sum).to.equal(5);
        done();
      }
    );
  });
});

