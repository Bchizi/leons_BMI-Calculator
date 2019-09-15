function bmi(no1, no2) {
    alert(no1 / (Math.pow(no2 / 100, 2).toFixed(2)));
}
var no1 = parseInt(prompt("what is your weight  in kg's?"));
var no2 = parseInt(prompt("your height in cm"));

bmi(no1, no2);