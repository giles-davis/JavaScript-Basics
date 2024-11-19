const log = console.log;

function calculateBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
  }

log(calculateBMI(1.8, 75))