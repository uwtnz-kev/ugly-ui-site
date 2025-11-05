// script.test.js
const { animateBackground } = require('./script');

// ✅ Passing test
test('animateBackground function should be defined', () => {
  expect(animateBackground).toBeDefined();
});

// 🚫 Failing test (we’ll fix this later)
test('intentional failure test', () => {
  expect(2 + 2).toBe(4);
});
