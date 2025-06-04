import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ displaytodo }) {
  const todoNameElements = useRef();
  const dueDateElements = useRef();

  const handleNewItem = (event) => {
    event.preventDefault();
    const todoname = todoNameElements.current.value;
    const tododate = dueDateElements.current.value;
    todoNameElements.current.value = "";
    dueDateElements.current.value = "";
    displaytodo(todoname, tododate);
  };

  return (
    <div className="container text-center">
      <form className="row yp-row" onSubmit={handleNewItem}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElements}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElements} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success YP-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
