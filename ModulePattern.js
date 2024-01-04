/* as the applicaiton and code base grows, it become increasingly import to keep your code maintainable 
and seperated. The modular patterns allow you to split up your code base into smaller, reusable pieces */

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x) {
  return x * 2;
}
export function square(x) {
  return x * x;
}

/* props by using module encapsulate parts of the your code that should not be publicly exposed. */
