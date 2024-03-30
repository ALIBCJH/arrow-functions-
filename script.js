function sayHello(name) {
  console.log(`hello, ${name}!`);;
}
sayHello('Simon'); //Hello, Simon

//ARROW FUNCTION IN ACTION
const greeting = name => {
  console.log(`Hello, ${name}!`);
}
greeting ('John');
//When you declare a function using an arrow function you need to assign the declaration to a variable  so that the function has a name

const = greeting = (name) => {
  return `Hello, ${name}!`;
}

//ARROW FUNCTIONS AS SINGLE LINE FUNCTION
const greetting = (name) `Hello, ${name}!`;