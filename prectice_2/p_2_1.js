let num1 = 17
let num2 = 25
let num3 = 26

if(num1 > num2 && num1 > num3){
    console.log(`largest number : num1 = ${num1}`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`largest number : num2 = ${num2}`);
}
else if(num3 > num1 && num3 > num2){
    console.log(`largest number : num3 = ${num3}`);
}
else{
    console.log(`equals numbers`);
}