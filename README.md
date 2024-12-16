# Unexpected Behavior with Loose Comparison and Null Values

This repository demonstrates a common JavaScript bug related to loose comparison (==) when dealing with null or undefined values. The bug arises from the fact that loose comparison does not always behave as expected when comparing null or undefined with numbers.  This can lead to unexpected behavior and logic errors in functions.

## Bug Description:
The `foo` function is designed to add two numbers. However, it attempts to handle null or undefined values by checking for them using loose comparison. This approach produces incorrect results in certain cases.

## How to Reproduce
Clone this repository and run `bug.js`. Observe the unexpected results.

## Solution
The solution involves using strict equality (===) to correctly compare null or undefined values with numbers.  This ensures that the function behaves as expected in all cases.

## License
MIT