import {
  createContext, useState, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext({
  todoList: [JSON.parse(sessionStorage.getItem('list'))],
  handleAddToList: () => {},
  handleCompleteTodo: () => {},
  handleDeleteTodo: () => {},
  handleDeleteAllTodos: () => {},
});

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  function handleAddToList(todoName) {
    if (!todoName.length) return;

    const todo = {
      todoName,
      id: Math.random(),
      completed: false,
    };

    const oldTodoList = todoList.slice();
    oldTodoList.push(todo);
    setTodoList(oldTodoList);
  }

  function handleCompleteTodo(todo) {
    const handleChangeStatusTodo = todoList.find(
      (oldTodoList) => oldTodoList.id === todo.id,
    );
    handleChangeStatusTodo.completed = !todo.completed;

    const oldTodoList = todoList.slice();
    setTodoList(oldTodoList);
  }

  function handleDeleteTodo(todo) {
    const filteredTodo = todoList.filter((oldTodo) => (
      oldTodo.id !== todo.id
    ));
    setTodoList(filteredTodo);
  }

  function handleDeleteAllTodos() {
    const filteredTodo = todoList.filter((oldTodo) => (
      oldTodo.completed !== true
    ));
    setTodoList(filteredTodo);
  }

  useEffect(() => {
    setTodoList(JSON.parse(sessionStorage.getItem('list')));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('list', JSON.stringify(todoList));
  }, [todoList]);

  const value = useMemo(() => ({
    todoList,
    handleAddToList,
    handleCompleteTodo,
    handleDeleteTodo,
    handleDeleteAllTodos,
  }));

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
