products = [
    { id: 1, name: 'Laptop', price: 1000, specs: { ram: '16GB', storage: '512GB SSD' },
    category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 500, specs: { ram: '8GB', storage: '128GB' }, category: 'Electronics' },
    { id: 3, name: 'Tablet', price: 300, specs: { ram: '4GB', storage: '64GB' }, category: 'Electronics' },
    { id: 4, name: 'Headphones', price: 100, specs: { type: 'Over-ear', noiseCancellation: true }, category: 'Accessories' },
    { id: 5, name: 'Smartwatch', price: 200, specs: { features: ['Heart Rate Monitor', 'GPS'] }, category: 'Wearables' }
];
// filter(),sort(), map(), reduce(),find()

// 1. Filter products by category
// Explain filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It does not modify the original array.
const electronics = products.filter(product => product.category === 'Electronics');
const accessories =products.filter(product=>product.category==='Accessories');
console.log(electronics);
console.log(accessories);
// 2. Sort products by price in ascending order
// Explain sort() method
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points.
const sortedByPrice = products.sort((a, b) => a.price - b.price);
console.log(sortedByPrice);
// 3. Map to get product names
// Explain map() method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not modify the original array.
const productNames = products.map(product => product.name);
console.log(productNames);
// 4. Reduce to calculate total price of all products
// Explain reduce() method
// The reduce() method executes a reducer function (that you provide) on each element of the
// array, resulting in a single output value.
// It takes two arguments: a callback function and an initial value.
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(`Total Price: $${totalPrice}`);
// 5. Find a product by name
// Explain find() method
// The find() method returns the value of the first element in the provided array that satisfies the
// provided testing function. Otherwise, undefined is returned.
const foundProduct = products.find(product => product.name === 'Smartphone');