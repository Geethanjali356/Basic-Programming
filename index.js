// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
console.log("Prime check:");
console.log("7 →", isPrime(7));   // true
console.log("10 →", isPrime(10)); // false


// Function to check if a number is even or odd
function evenOdd(num) {
  return num % 2 === 0;
}

// Example usage
console.log("\nEven/Odd check:");
console.log("8 →", evenOdd(8));   // true (even)
console.log("13 →", evenOdd(13)); // false (odd)
