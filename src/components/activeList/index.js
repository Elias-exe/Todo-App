import { useContext } from 'react';
import Header from '../header';
import NavBar from '../navBar';
import { Container } from '../../pages/home/styles';
import { TodoContext } from '../context';

export default function ActiveList() {
  const { todoList, completeTodo } = useContext(TodoContext);

  return (
    <Container>
      <Header />
      <NavBar />
      <div className="todoContainer">
        {todoList.map((todo) => (
          todo.completed === true ? <div />
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
