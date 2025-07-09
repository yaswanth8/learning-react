/*
prepare a coffee
1. get milk from shop
2. boil milk
3. add coffee powder
*/

const getMilkFromShop = (boilMilk,addCoffeePowder) => {
    setTimeout(() => {
        console.log('Milk is ready from shop');
        boilMilk(addCoffeePowder);
    }, 1000);
}
const boilMilk = (addCoffeePowder) => {
    setTimeout(() => {
        console.log('Milk is boiled');
        addCoffeePowder();
    }, 2000);
}
const addCoffeePowder = () => {
    setTimeout(() => {
        console.log('Coffee powder is added');
  
    }, 1000);
}

const prepareCoffee = () => {
    getMilkFromShop(boilMilk,addCoffeePowder);
}
// Start the coffee preparation process
prepareCoffee();