import { MdDelete } from "react-icons/md";
function TodoItem({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row yp-row highlight">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger yp-button"
            onClick={() => onDeleteClick(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
