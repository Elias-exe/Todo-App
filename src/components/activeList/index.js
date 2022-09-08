import { useContext } from 'react';
import Header from '../header';
import NavBar from '../navBar';
import { Container } from '../../pages/home/styles';
import { TodoContext } from '../context';

export default function ActiveList() {
  const { todoList, completeTodo } = useContext(TodoContext);
  const elements = todoList.forEach((item) => (
    console.log(item.completed)
  ));
  console.log(elements);
  return (
    <Container>
      <Header />
      <NavBar />
      <div className="todoContainer">
        {todoList.completed !== true && (
          todoList.map((todo) => (
            <label htmlFor={todo.id} key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                name={todo.todoName}
                onClick={completeTodo}
              />
              {todo.todoName}
              <br />
            </label>
          ))
        )}
      </div>
    </Container>
  );
}
