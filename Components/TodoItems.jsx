import TodoItem from "./TodoItem";
const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItem.map((item, index) => (
        <TodoItem
          key={index}
          todoname={item.name}
          tododate={item.date}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
