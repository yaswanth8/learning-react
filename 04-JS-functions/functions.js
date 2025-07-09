// normal function
function greet(name) {

    return `Hello, ${name}!`;
}
console.log(greet('Yaswanth'));
// function expression
const greetExpression = function(name) {
    console.log( `Hello, ${name}! from function expression`);
}
greetExpression('Yaswanth');
// arrow function
const greetArrow = (name) => {
    console.log(`Hello, ${name}! from arrow function`);
}
greetArrow('Yaswanth');
// function with return
const add = (a, b) => {
    return a + b;
}
const sum = add(5, 10);
console.log(`Sum: ${sum}`);

// function
const wishMsg=() => {
    console.log(`Good Morining and time is ${new Date().toLocaleTimeString()}`);
}
let timer=setInterval(wishMsg, 1000);
// setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
// It returns an interval ID that can be used to clear the interval later.
setTimeout(() => {
    clearInterval(timer);
    console.log('Timer stopped');
}, 5000); // stops after 5 seconds

