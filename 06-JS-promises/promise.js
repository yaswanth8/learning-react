const doTask= new Promise((resolve, reject) => {
    const taskCompleted = true; // Simulate task completion
    if (taskCompleted) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed.");
    }
});
doTask
    .then((message) => {
        console.log(message);
        return "Proceeding to the next task.";
    })
    .then((nextMessage) => {
        console.log(nextMessage);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Task process completed.");
    });
    // Explanation:
    // 1. A Promise is created that simulates a task.
    // 2. If the task is completed, it resolves with a success message.
    // 3. If the task fails, it rejects with an error message.  
    // 4. The `then` method is used to handle the resolved value and chain further actions.
    // 5. The `catch` method is used to handle any errors that occur during
    //    the promise execution.
    // 6. The `finally` method is executed regardless of the promise's outcome,
    //    allowing for cleanup or final actions.
// This code demonstrates how to use Promises in JavaScript to handle asynchronous operations.
// It shows how to create a promise, handle success and failure cases, and chain multiple actions together.
// Promises are a powerful way to manage asynchronous operations in JavaScript, allowing for cleaner and more readable code compared to traditional callback methods.
// Promises are particularly useful in scenarios where you need to perform multiple asynchronous operations in sequence or handle errors gracefully.
// They help avoid "callback hell" by providing a more structured way to handle asynchronous code.
// Promises are widely used in modern JavaScript development, especially in frameworks like React, where asynchronous operations such as API calls are common.
