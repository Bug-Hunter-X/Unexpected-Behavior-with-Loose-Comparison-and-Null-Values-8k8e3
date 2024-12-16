function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Performs addition if no null values are passed
}

console.log(foo(null, 5)); // Expected output: 0
console.log(foo(5, null)); // Expected output: 0
console.log(foo(5, 5)); // Expected output: 10