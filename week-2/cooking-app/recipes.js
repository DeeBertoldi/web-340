"use strict";

/**
 * Author: Daniella Bertoldi
 * Date:
 * File Name: week-2/cooking-app/recipes.js
 * Description: testing module exports and learning about nodejs + package.json
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions
module.exports = { createRecipe, setTimer, quit };
