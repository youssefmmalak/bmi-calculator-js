function calculateBMI(weight, height) {
    // This function calculates the BMI using the formula: BMI = (weight in pounds / (height in inches * height in inches)) * 703
    let bmi = weight / (height * height) * 703;
    return bmi.toFixed(2);
}

function getBMICategory(weight, height) {
    // This function determines the BMI category based on the calculated BMI value
    if (weight <= 0 || height <= 0) {
        return 'Invalid input: Weight and height must be positive numbers.';
    }

    let bmi = calculateBMI(weight, height);
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'OBESE';
    }
}

function getBMIReport(weight, height) {
    // This function combines the BMI calculation and category determination into a single report
    let bmi = calculateBMI(weight, height);
    let category = getBMICategory(weight, height);
    if (weight <0 || height < 0) {
        return 'Invalid input: Weight and height must be positive numbers.';
    }
    return `Your BMI is ${bmi} and you are classified as ${category}.`;
}

console.log(getBMICategory(206, 69)); // Output: OBESE
console.log(getBMICategory(180, 70)); // Output: Overweight
console.log(getBMICategory(120, 65)); // Output: Normal weight 

console.log(calculateBMI(206, 69)); // Output: 29.30 // Output: Overweight
console.log(calculateBMI(180, 70)); // Output: 25.82 // Output: Overweight
console.log(calculateBMI(120, 65)); // Output: 19.96 // Output: Normal weight

console.log(getBMIReport(206, 69)); // Output: Your BMI is 29.30 and you are classified as OBESE.
console.log(getBMIReport(180, 70)); // Output: Your BMI is 25.82 and you are classified as Overweight.  
console.log(getBMIReport(120, 65)); // Output: Your BMI is 19.96 and you are classified as Normal weight.