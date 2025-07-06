let employee={
    name:"Yaswanth",
    age:25,
    designation:"Software Engineer",
    isEmp:true
}
console.log(employee);
console.log(employee.age);
console.log(employee['age']); //both are same

// JSON object has double quotes for both key and value pair
// Java script object as shown above
const user={
    name:"Yaswanth",
    age:25,
    address:{
        city:"Vijayawada",
        state:"Andhra Pradesh",
        country:"India"
    },
    hobbies:["Reading", "Coding", "Gaming"],
    isActive:true
}
console.log(user);
console.log(user.name);
console.log(user.address.city);
console.log(user.hobbies[1]); // Accessing array element
console.log(`User Details:
Name: ${user.name}`);
// destructuring the object
const{state, country}=user.address;
console.log(`State: ${state}, Country: ${country}`);