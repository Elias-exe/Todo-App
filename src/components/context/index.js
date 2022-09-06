import {
  createContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext({
  todoList: [localStorage.getItem('list')],
  addToList: () => {},
});

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const addToList = (todoName) => {
    if (!todoName.length) return;

    const todo = {
      todoName,
      id: Math.random(),
      completed: false,
    };

    const oldTodoList = todoList.slice();
    oldTodoList.push(todo);
    setTodoList(oldTodoList);
  };

  const value = useMemo(() => ({
    todoList,
    addToList,
  }));

  console.log(todoList);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
