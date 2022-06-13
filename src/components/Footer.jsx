import { NavLink } from 'react-router-dom';

const filters = [
  { name: 'All', path: '/' },
  { name: 'Active', path: '/active' },
  { name: 'Completed', path: '/completed' },
];

function Footer({ todos, clearCompleted }) {
  const uncompletedTodosCounter = todos.filter((t) => !t.isCompleted).length;

  return (
    <div className="footer">
      <div className="footer-left">
        {uncompletedTodosCounter === 0 ? 'all done!' : `${uncompletedTodosCounter} items left`}
      </div>
      <ul className="footer-center">
        {filters.map((item, index) => (
          <li key={index}>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="footer-right">
        <span onClick={clearCompleted}>Clear completed</span>
      </div>
    </div>
  );
}

export default Footer;
