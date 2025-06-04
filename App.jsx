import AddName from "./component/AddName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  let Todoitems = [
    // {
    //   name: "Buy milk",
    //   date: "4/10/24",
    // },
    // {
    //   name: "Go to School",
    //   date: "5/10/24",
    // },
    // {
    //   name: "Go to gym",
    //   date: "6/10/24",
    // },
  ];

  const [todoitems, settodoitems] = useState(Todoitems);
  const handleItem = (itemname, itemdate) => {
    console.log(`item name : ${itemname} item date : ${itemdate}`);

    const newItem = [
      ...todoitems,
      {
        name: itemname,
        date: itemdate,
      },
    ];
    settodoitems(newItem);
  };

  const handleDeleteButton = (todoItemName) => {
    const newItem = todoitems.filter((item) => item.name !== todoItemName);
    settodoitems(newItem);
    console.log(`item deleted : ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo displaytodo={handleItem}></AddTodo>
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItem={todoitems}
        onDeleteClick={handleDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;
