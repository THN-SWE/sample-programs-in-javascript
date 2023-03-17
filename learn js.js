function sayHello() {
  for (i = 1; i <= 10; i++) {
    // i = 1 is executed one time before starting the loop
    // i <= 0 is the condition statement to run the loop
    // i++ will run every end of a loop
    console.log("hello");
  }
}

function onlyby2(n) {
  // this funtion is going to print numbers only divisible by 2 from 1 to n
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      return true;
    }
  }
}

function onlyby3(n) {
  // this funtion is going to print numbers only divisible by 3 from 1 to n
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      return true;
    }
  }
}

function onlyby23(n) {
  // this funtion is going to print numbers only divisible by 2 and 3 from 1 to n
  //here we are using calling statements. 
  if (onlyby2(n) && onlyby3(n)){
    return true
  }
}

function onlyPrime(n) {
  // this funtion is going to print numbers only divisible by 1 and i itself, ie: prime numbers.
  // the algorithm used here to solve is using 2 for loops
  // the outer loop will iterate through 2 -100 and storing the number in i (1 is not a prime number)
  // the inner loop will check is i devisible by all of the number before it one by one.
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// onlyPrime(100);

// funtions allows code reusability
