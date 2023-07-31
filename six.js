function insertDashesBetweenEvenNumbers(inputNum) {
    // Convert the input number to a string
    const numString = inputNum.toString();
  
    // Initialize an empty string to store the result
    let result = "";
  
    // Loop through each character in the numString
    for (let i = 0; i < numString.length; i++) {
      const currentDigit = parseInt(numString[i]);
      const nextDigit = parseInt(numString[i + 1]);
  
      // Append the current digit to the result string
      result += currentDigit;
  
      // Check if the current digit is even and the next digit is also even
      if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
        // Insert a dash (-) between the two even digits
        result += "-";
      }
    }
  
    return result;
  }
  
  // Test the function
  const inputNumber = 025468;
  const outputString = insertDashesBetweenEvenNumbers(inputNumber);
  console.log(outputString); // Output: "0-254-6-8"
  