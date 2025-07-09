/* prepare a coffee
1. get milk from shop
2. boil milk
3. add coffee powder
*/
// using promises
const getMilkFromShop = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Milk is ready from shop');
        resolve(); // Resolve the promise when milk is ready
    }, 1000);
});
const boilMilk = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Milk is boiled');
        resolve(); // Resolve the promise when milk is boiled
    }, 2000);
});
const addCoffeePowder = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Coffee powder is added');
        resolve(); // Resolve the promise when coffee powder is added
    }, 1000);
});
// Start the coffee preparation process using promises
    getMilkFromShop
        .then(() => boilMilk) // Wait for milk to be ready, then boil it
        .then(() => addCoffeePowder) // Wait for milk to be boiled, then add coffee powder
        .then(() => {
            console.log('Coffee is ready!'); // Final step after all promises are resolved
        })
        .catch((error) => {
            console.error('Error in coffee preparation:', error); // Handle any errors that occur
        });
