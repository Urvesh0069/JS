let n = [2, 3, 4, 5, 6, 9, 10, 3]; 
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < n.length; i++) {
  if (i % 2 === 0)
{
    evenSum += i;
  } 
  else 
  {
    oddSum += i;
  }
}

if (evenSum > oddSum) {
  console.log("even");
} else {
  console.log("odd");
}
