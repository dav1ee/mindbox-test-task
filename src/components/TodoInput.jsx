import { useState } from 'react';

import closeSvg from '../assets/img/close.svg';

function TodoInput({ addTodo }) {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);
  const onClear = () => setValue('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && value !== '') {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        text: value,
        isCompleted: false,
      };

      addTodo(todo);
      setValue('');
    }
  };

  return (
    <div className="input">
      <input
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Add new todo..."
      />
      {value && <img onClick={onClear} src={closeSvg} alt="" className="input__clear" />}
    </div>
  );
}

export default TodoInput;
