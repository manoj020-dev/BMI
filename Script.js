function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        const resultElement = document.getElementById('result');
        
        let message;
        if (bmi < 18.5) {
            message = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            message = "Overweight";
        } else  if (bmi >=29.9&& bmi <35){
            message = "Obesity";
        } else {
            message = "Extremly Obesity";
        }

        resultElement.innerHTML = `<h2>Your BMI: ${bmi}</h2><p>${message}</p>`;
    } else {
        alert("Please enter valid weight and height!");
    }
}
