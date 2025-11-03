"use strict";

/**
 * Author: Daniella Bertoldi
 * Date: 10/27/2025
 * File Name: weight-converter.js
 * Description: Converts pounds to kilograms using a command-line argument.
 */

const LB_TO_KG = 0.45359237;

// Check if exactly one argument is provided
if (process.argv.length !== 3) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const input = process.argv[2];
const pounds = Number(input);

if (Number.isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = (pounds * LB_TO_KG).toFixed(2);
console.log(kilograms);
