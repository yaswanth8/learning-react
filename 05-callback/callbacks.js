const employees= [
    { 
        id: 1,
        name: 'Alice',
        age: 30,
        department: 'HR',
        isActive: true
    },
    { 
        id: 2,
        name: 'Bob',
        age: 25,
        department: 'Engineering',
        isActive: false
    },
    { 
        id: 3,
        name: 'Charlie',
        age: 28,
        department: 'Marketing',
        isActive: true
    },
    { 
        id: 4,
        name: 'David',
        age: 35,
        department: 'Finance',
        isActive: true
    }
];
const readEmployeesFromDB=() => {
    setTimeout(() => {
        console.log('Reading employees from database...');
        employees.forEach(employee => {
            console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Active: ${employee.isActive}`);
        });
    },1000);  
}
const addEmployeeToDB=(employee,callback) => {
    setTimeout(() => {
        console.log('Adding employee to database...');
        employees.push(employee);
        console.log(`Employee added: ${employee.name}`);
        callback(); // Call the callback function after adding the employee
      
    }, 2000);
}

let newEmployee = {
    id: 5,
    name: 'Eve',
    age: 22,
    department: 'Design',
    isActive: true
};

// callback
addEmployeeToDB(newEmployee, readEmployeesFromDB);