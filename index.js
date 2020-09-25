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

