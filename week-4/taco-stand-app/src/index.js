/**
 * Author:Daniella Bertoldi
 * Date: 11/16/25
 * File Name: index.js
 * Description: Main entry point for the Taco Stand application.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacostand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  tacoStand.on("serve", (customerName) => {
    console.log(`Serving customer: ${customerName}`);
  });
  tacoStand.on("prepare", (tacoType) => {
    console.log(`Preparing taco of type: ${tacoType}`);
  });
  tacoStand.on("rush", (rushLevel) => {
    console.log(`Handling rush level: ${rushLevel}`);
  });

  // TODO: Handle the commands
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

 if (command === "serve") {
    tacoStand.serveCustomer(arg);
  } else if (command === "prepare") {
    tacoStand.prepareTaco(arg);
  } else if (command === "rush") {
    tacoStand.handleRush(arg);
  } else {
    console.log('Unknown command. Use "serve", "prepare", or "rush".');
  }


