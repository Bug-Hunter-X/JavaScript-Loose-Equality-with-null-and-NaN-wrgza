# JavaScript Loose Equality Bug

This repository demonstrates a subtle bug in JavaScript related to loose equality (==) when comparing null and NaN.

The `bug.js` file contains a function that incorrectly handles null and NaN values due to the loose equality check.
The `bugSolution.js` file provides a corrected version using strict equality (===).