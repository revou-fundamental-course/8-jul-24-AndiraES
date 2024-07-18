var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".status");
let resultScore = document.querySelector(".score");

// RESULT DATA VARIABLES
var gender_sex = document.getElementById("gender-sex");
var years = document.getElementById("years");
var height_cm = document.getElementById("height-cm");
var weight_kg = docuemnt.getElementById("weight-kg");


// FUNCTION FOR CALCULATE BMI AND RESET 

function countBmi(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    var p = [age.value, height.value, weight.value];

    var gender = "";
    var photo = "";
    if (male.checked) {
        p.push("male");
        gender = "Male";
        photo = "img/male.png";
    } else if (female.checked) {
        p.push("female");
        gender = "Female";
        photo = "img/female.png";
    }

    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

    var result = "";
    var score_range = "";
    var explaination = "";
    var explaination_two = "";

    if (bmi < 18.5) {
        result = "Underweight";
        score_range = "Your result is under 18.5";
        explaination = "indicating your weight is in the Underweight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness.";
        explaination_two = "Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being. Your healthcare provider might determine possible reasons for underweight and recommend support or treatment. <br> Maintaining a weight in the healthy BMI range is one way to support overall health as you age.";

        // Apply for change color of the result
        resultArea.classList.remove("green", "yellow", "orange", "red");
        resultScore.classList.remove("green", "yellow", "orange", "red");
        resultArea.classList.add("blue");
        resultScore.classList.add("blue");
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
        score_range = "Your result is between 18.5 - 24.9";
        explaination = "indicating your weight is in the Normal category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness. Maintaining a weight in the healthy BMI range is one way to support overall health as you age.";
        explaination_two = "If the result from the BMI calculator shows that your body mass index is within the normal range, it indicates that the ratio of your weight to your height is considered healthy and optimal according to standard health guidelines. This suggests that your current weight is generally not associated with an increased risk of weight-related health issues, reflecting a balanced and potentially lower risk profile compared to individuals whose BMI falls outside this healthy range.";

        // Apply for change color of the result
        resultArea.classList.remove("blue", "yellow", "orange", "red");
        resultScore.classList.remove("blue", "yellow", "orange", "red");
        resultArea.classList.add("green");
        resultScore.classList.add("green");
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
        score_range = "Your result is between 25.0 - 29.9";
        explaination = "indicating your weight is in the Overweight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness. Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being.";
        explaination_two = "Your healthcare provider might determine possible reasons for overweight and recommend support or treatment. Having excess weight can increase risk for chronic conditions, such as high blood pressure, type 2 diabetes, and high cholesterol. Maintaining a weight in the healthy BMI range is one way to support overall health as you age.";

        // Apply for change color of the result
        resultArea.classList.remove("blue", "green", "orange", "red");
        resultScore.classList.remove("blue", "green", "orange", "red");
        resultArea.classList.add("yellow");
        resultScore.classList.add("yellow");
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
        score_range = "Your score result is between 30.0 - 34.9";
        explaination = "indicating your weight is in the Overweight category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness. Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being.";
        explaination_two = "Your healthcare provider might determine possible reasons for overweight and recommend support or treatment. Having excess weight can increase risk for chronic conditions, such as high blood pressure, type 2 diabetes, and high cholesterol. Maintaining a weight in the healthy BMI range is one way to support overall health as you age.";

        // Apply for change color of the result
        resultArea.classList.remove("blue", "green", "yellow", "red");
        resultScore.classList.remove("blue", "green", "yellow", "red");
        resultArea.classList.add("orange");
        resultScore.classList.add("orange");
    } else if (35 <= bmi) {
        result = "Extremely Obese";
        score_range = "Your score result is more than 35";
        explaination = "indicating your weight is in the Obese category for adults of your height. BMI is a screening measure and is not intended to diagnose disease or illness. Discuss your BMI category with your healthcare provider as BMI may relate to your overall health and well-being.";
        explaination_two = "Your healthcare provider might determine possible reasons for overweight and recommend support or treatment. Having excess weight can increase risk for chronic conditions, such as high blood pressure, type 2 diabetes, and high cholesterol. Maintaining a weight in the healthy BMI range is one way to support overall health as you age.";

        // Apply for change color of the result
        resultArea.classList.remove("blue", "green", "yellow", "orange");
        resultScore.classList.remove("blue", "green", "yellow", "orange");
        resultArea.classList.add("red");
        resultScore.classList.add("red");

    }

    var imagePhoto = document.getElementById("image-photo");
    imagePhoto.src = photo;


    // Update the result elements
    document.querySelector(".result .score").textContent = bmi.toFixed(2);
    document.querySelector(".result .status").textContent = result;

    document.querySelector("#gender-sex").textContent = gender;
    document.querySelector("#years").textContent = age.value + " years";
    document.querySelector("#height-cm").textContent = height.value + " cm";
    document.querySelector("#weight-kg").textContent = weight.value + " kg";
    document.querySelector(".score-range").textContent = score_range;
    document.querySelector(".ex-one").textContent = "Your score is " + bmi.toFixed(2) + ", " + explaination;
    document.querySelector(".ex-two").textContent = explaination_two;
    document.querySelector("#image-photo").imageContent = photo;

}


function reset () {
    var reset_data = [male, female, weight, age, height];

    reset_data.forEach(function (id) {
        id.value = "";
    });
}





