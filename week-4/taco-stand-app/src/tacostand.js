/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush

//class creation
class TacoStandEmitter extends EventEmitter {

  //step A
  serveCustomer(customerName) {
    this.emit("serve", customerName);
  }

  //step B
  prepareTaco(tacoType) {
    this.emit("prepare", tacoType);
  }
  
  //step C
  handleRush(rushLevel) {
    this.emit("rush", rushLevel);
  }
}

// exportar a classe (IMPORTANTE!)
module.exports = TacoStandEmitter;  
