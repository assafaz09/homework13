function checkNumber(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkNumber(4));
console.log(checkNumber(7));

function color(col) {
  switch (col) {
    case "red":
      console.log("stop");
      break;
    case "green":
      console.log("go");
      break;
    case "yellow":
      console.log("Wait");
      break;
    default:
      console.log("Unknown color");
  }
}
color("red");
color("green");
color("yellow");
color("bkack");

function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();

const names = ["dan", "lee", "assaf"];
for (const name of names) {
  console.log(name.length);
}

function arrays(arr) {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combaineArr = [...arr1, ...arr2];
  console.log(combaineArr);
}
arrays();

const square = (num) => num ** 2;
console.log(square(5));

let person = {
  name: "assaf",
  age: 23,
  isStudent: true,
};
function checkPerson(person) {
  if (person.isStudent=== true) {
    console.log(`${person.name} is a student.`);
  } else {
    console.log(`${person.name} is not a student.`);
  }
}
checkPerson(person);


function maxNum(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const arr = [1, 2, 3, 4, 5];
const result = maxNum(arr);
console.log("max number is: " + result); 
