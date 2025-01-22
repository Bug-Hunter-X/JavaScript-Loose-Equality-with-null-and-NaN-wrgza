function foo(x) {
  if (x == null) {
    return 0; // This is incorrect if x could be NaN
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(NaN));  // Output: NaN + 1 (which is NaN).  This shows that null == NaN, but null !== NaN