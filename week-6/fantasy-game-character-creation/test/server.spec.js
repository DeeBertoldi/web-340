"use strict";

const http = require("http");
const server = require("../src/server");

describe("Fantasy Game Character Creation API", () => {

  afterAll(() => {
    server.close();
  });

  test("responds to /create-character POST request with query parameters", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create-character?class=Warrior&gender=Female&fact=Loves%20dragons",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Character created: Warrior, Female, Loves dragons");
        done();
      });
    });

    req.end();
  });

  test("responds to /confirm POST request", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character creation confirmed.");
        done();
      });
    });

    req.end();
  });

  test("responds to /view-character GET request with stored character", done => {
    http.get("http://localhost:3000/view-character", res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(data)).toEqual({
          class: "Warrior",
          gender: "Female",
          fact: "Loves dragons"
        });
        done();
      });
    });
  });

});
