function reverseString(inputString) {
    // Step 1: Create an empty stack
    const stack = [];
  
    // Step 2: Push each character onto the stack using a for loop
    for (let i = 0; i < inputString.length; i++) {
      stack.push(inputString[i]);
    }
  
    // Step 3: Pop characters from the stack to form the reversed string
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example Usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log("Original String: ", originalString);
  console.log("Reversed String: ", reversedString);