import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState("");

  function addTask(name) {
    console.log("handleSubmit call addTask")
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    console.log("new task is ", newTask)
    console.log("new task list is ", typeof [...tasks, newTask])

    setTasks([...tasks, newTask]);

  }
  function toggleTaskCompleted(id) {
    console.log(tasks[0]);
  }

  console.log("task var type", typeof props.tasks)
  const taskList = props.tasks.map(
    (task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted}
    />
  );
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  console.log("task list at begining is ", taskList)



  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">


        {taskList}
      </ul>
    </div>
  );
}
export default App;