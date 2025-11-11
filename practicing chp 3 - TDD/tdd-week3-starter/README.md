
# Week 3 TDD Mini-Starter (VS Code friendly)

This folder has **three tiny exercises** matching your Chapter 3 goals:

1) **assert-demo** — Red/Green/Refactor with Node's built-in `assert`
2) **errors-demo** — Custom error class + `try/catch` + `assert.throws`
3) **jest-demo** — Jest tests + coverage report

---

## Quick Start

1. Open VS Code → **File → Open Folder...** → select this folder.
2. Open the built-in terminal (**View → Terminal**).
3. Run:
   ```bash
   npm install
   ```

### Run the small assert examples
```bash
npm run test:assert
```
You should see checkmarks for each test function.

### Run Jest tests
```bash
npm run test:jest
```

### Generate coverage
```bash
npm run coverage
```
Then open the HTML report:
- On your machine: `coverage/lcov-report/index.html` (Right-click → "Open with Live Server" in VS Code if you have that extension, or open in your browser).

---

## File-by-file

### assert-demo
- `assert-demo/square.js` — `calculateSquareRoot(n)` with input validation (number & non-negative).
- `assert-demo/square.spec.js` — **Three tiny tests** using `assert`:
  - happy path (9 → 3)
  - throws `TypeError` for non-number
  - throws `RangeError` for negative

### errors-demo
- `errors-demo/divide.js` — `DivideByZeroError` custom error + `divide(x, y)` function.
- `errors-demo/divide.spec.js` — tests for ok case, divide-by-zero, bad types, and a `try/catch` demo that prints a friendly message only for DivideByZeroError.

### jest-demo
- `jest-demo/src/composer.js` — tiny function to transform inputs.
- `jest-demo/test/composer.spec.js` — two Jest tests (arrayContains & filtering falsy).

---

## Suggested Study Flow (30–45 min total)

1. Run `npm run test:assert` and skim the code in `assert-demo/` as you watch the console output.
2. Open `errors-demo/divide.js` and read just the class + guard clause; then `npm run test:assert` again and observe the printed lines from `errors-demo/divide.spec.js`.
3. Finally, run `npm run test:jest` and `npm run coverage`. Open the coverage HTML and click into `composer.js` to see what got executed by tests.

If anything fails, it's *perfect for learning* — fix just enough to see the test pass (Green), then tidy (Refactor).
