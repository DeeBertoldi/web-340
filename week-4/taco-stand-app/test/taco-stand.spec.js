/**
 * Author: Daniella bertoldi
 * Date:
 * File Name:
 * Description:
 */

"use strict";

// importa a biblioteca de asserções do Node
const assert = require("assert");

// importa a classe TacoStandEmitter do src
const TacoStandEmitter = require("../src/tacostand");

// TODO: Write tests for the TacoStandEmitter methods

// test 1 - Bank Account Example - deposit method "formula"
function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();

    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
    });

    tacoStand.serveCustomer("John");

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }                   
}

// test 2 - Bank Account Example - withdraw method "formula"
function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();

    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
    });

    tacoStand.prepareTaco("beef");

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// test 3 - Bank Account Example - insuficient funds
function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();

    tacoStand.on("rush", (rushLevel) => {
      assert.strictEqual(rushLevel, "lunch");
    });

    tacoStand.handleRush("lunch");

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// calling the test functions
testServeCustomer();
testPrepareTaco();
testHandleRush();

