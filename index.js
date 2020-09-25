// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, desc) {
  const task = {
    title,
    desc,
    complete: false,
    completeTask: function () {
      this.complete = true
    },
    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logTaskState();
task1.completeTask();
task1.logTaskState();









// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];
// console.log(tasks);
// // change task status
// completeTask(task1);
// completeTask(task2);

// // logTaskState(task1)
// // logTaskState(task2)
// console.log(task1, task2)






// for now, let's just make sure we see our tasks
