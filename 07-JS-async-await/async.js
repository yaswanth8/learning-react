const getMilkFromShop = new Promise((resolve, reject) => {
    setTimeout(() => {
 
        resolve('Milk is ready from shop') // Resolve the promise when milk is ready
    }, 1500);
});
const boilMilk = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Milk is boiled'); // Resolve the promise when milk is boiled
    }, 1000);
});
const addCoffeePowder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Coffee powder is added'); // Resolve the promise when coffee powder is added
    }, 1500);
});
// Start the coffee preparation process using aync-await
const prepareCoffee = async () => {
    try {
        const milk = await getMilkFromShop; // Wait for milk to be ready
        console.log(milk);
        
        const boiledMilk = await boilMilk; // Wait for milk to be boiled
        console.log(boiledMilk);
        
        const coffee = await addCoffeePowder; // Wait for coffee powder to be added
        console.log(coffee);
        
        console.log('Coffee is ready!'); // Final step after all promises are resolved
    } catch (error) {
        console.error('Error in coffee preparation:', error); // Handle any errors that occur
    }
}
// Start the coffee preparation process
prepareCoffee();