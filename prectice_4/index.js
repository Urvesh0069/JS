function calculateplus() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2);
    document.getElementById('result').innerHTML = sum;
}
function calculateMinus() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) - Number(num2);
    document.getElementById('result').innerHTML = sum;
}
function calculateMultiplication() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) * Number(num2);
    document.getElementById('result').innerHTML = sum;
}
function calculatedivision() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) / Number(num2);
    document.getElementById('result').innerHTML = sum;
}


