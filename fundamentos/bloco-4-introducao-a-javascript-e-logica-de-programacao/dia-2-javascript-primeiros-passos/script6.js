let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (let eachNumber of numbers) {
  if (eachNumber % 2 === 1) {
    counter=counter+1;
  }
}

if (counter === 0) {
  console.log("Nenhum valor encontrado");
} else {
 console.log("Odd numbers: ",counter);
}

