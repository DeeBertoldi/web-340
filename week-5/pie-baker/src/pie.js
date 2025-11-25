/**
 * Author: Daniella Bertoldi
 * Date: 11/24/2025
 * File Name: pie.js
 * Description: Pie baker module using essential ingredients check.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentials = ["flour", "sugar", "butter"];

  const missing = essentials.filter(item => !ingredients.includes(item));

  if (missing.length > 0) {
    console.warn(
      `Warning: Missing essential ingredients for ${pieType} pie: ${missing.join(", ")}`
    );
    process.exit(1);
  }

  return `Baking a delicious ${pieType} pie!`;
}

module.exports = { bakePie };
