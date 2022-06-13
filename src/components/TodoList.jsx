import checkSvg from '../assets/img/check.svg';

function TodoList({ todos, completeTodo }) {
  return (
    <div className="todo-list">
      {todos &&
        todos.map((item) => (
          <div key={item.id} className="item">
            <div
              onClick={() => completeTodo(item.id)}
              className={`item__circle ${item.isCompleted ? 'active' : ''}`}>
              <img src={checkSvg} alt="" />
            </div>
            <div className="item__text">{item.text}</div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
