'use strict';
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {
  // TODO: Implement this function
}

// Call your test functions here
// "template 1" from reading chapter 3- testEarthToMars()
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.5);
    console.log('✓ testEarthToMars passed');
    return true;
  } catch (error) {
    console.error(`✗ testEarthToMars failed: ${error.message}`);
    return false;
  }
}

// template 2
function testMercuryToVenus() {
  try {
    assert.strictEqual(calculateDistance('Mercury', 'Venus'), 0.3);
    console.log('✓ testMercuryToVenus passed');
    return true;
  } catch (error) {
    console.error(`✗ testMercuryToVenus failed: ${error.message}`);
    return false;
  }
}

// Test 3
function testJupiterToSaturn() {
  try {
    assert.strictEqual(calculateDistance('Jupiter', 'Saturn'), 4.3);
    console.log('✓ testJupiterToSaturn passed');
    return true;
  } catch (error) {
    console.error(`✗ testJupiterToSaturn failed: ${error.message}`);
    return false;
  }
}

// Run tests
const results = [
  testEarthToMars(),
  testMercuryToVenus(),
  testJupiterToSaturn(),
];

const passed = results.filter(Boolean).length;
console.log(`\n${passed}/3 tests passed`);