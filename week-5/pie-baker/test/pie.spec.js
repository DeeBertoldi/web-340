/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie", () => {

  test("returns success message when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("Baking a delicious apple pie!");
  });

  test("returns success message even with extra ingredients", () => {
    const result = bakePie("pumpkin", [
      "flour",
      "sugar",
      "butter",
      "pumpkin",
      "cinnamon"
    ]);
    expect(result).toBe("Baking a delicious pumpkin pie!");
  });

  // IMPORTANT: this must be LAST because it checks process.exit
  test("logs warning and exits if an essential ingredient is missing", () => {
    // mock console.warn so we can test it without printing
    const warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    // mock process.exit so Jest doesn't stop running
    const exitSpy = jest.spyOn(process, "exit").mockImplementation(() => {});

    bakePie("cherry", ["flour", "butter", "cherries"]); // sugar missing

    expect(warnSpy).toHaveBeenCalledWith(
      "Warning: Missing essential ingredients for cherry pie: sugar"
    );
    expect(exitSpy).toHaveBeenCalledWith(1);

    warnSpy.mockRestore();
    exitSpy.mockRestore();
  });

});
