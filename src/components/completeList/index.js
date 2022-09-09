import { useContext } from 'react';
import Header from '../header';
import NavBar from '../navBar';
import { TodoContext } from '../context';
import { Container } from '../../pages/home/styles';

export default function CompleteList() {
  const { todoList, completeTodo } = useContext(TodoContext);
  return (
    <Container>
      <Header />
      <NavBar />
      <div className="todoContainer">
        {todoList.map((todo) => (
          todo.completed === false ? <div />
            : (
              <label htmlFor={todo.id} key={todo.id}>
                <input
                  type="checkbox"
                  id={todo.id}
                  name={todo.todoName}
                  onClick={() => completeTodo(todo)}
                />
                {todo.todoName}
                <br />
              </label>
            )
        ))}
      </div>
    </Container>
  );
}
