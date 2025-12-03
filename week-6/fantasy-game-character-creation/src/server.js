"use strict";

const http = require('http');
const url = require('url');

let createdCharacter = null;

// create the server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); 
  const pathname = parsedUrl.pathname;    
  const query = parsedUrl.query;     

  // POST /create-character
  if (pathname === '/create-character' && req.method === 'POST') {
    const charClass = query.class;
    const gender = query.gender;
    const fact = query.fact;

    // save character
    createdCharacter = {
      class: charClass,
      gender: gender,
      fact: fact
    };

    res.writeHead(201);
    res.end(`Character created: ${charClass}, ${gender}, ${fact}`);

  // POST /confirm
  } else if (pathname === '/confirm' && req.method === 'POST') {
    res.writeHead(200);
    res.end("Character creation confirmed.");

  // GET /view-character
  } else if (pathname === '/view-character' && req.method === 'GET') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(createdCharacter));

  // default 404
  } else {
    res.writeHead(404);
    res.end();
  }
});

// start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;
