import { useContext } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import Header from '../header';
import NavBar from '../navBar';
import { TodoContext } from '../context';
import { Container, ContainerTodoComplete } from './styles';

export default function CompleteList() {
  const {
    todoList, handleCompleteTodo, handleDeleteTodo, handleDeleteAllTodos,
  } = useContext(TodoContext);
  return (
    <Container>
      <Header />
      <NavBar />
      <div className="todoContainer">
        {todoList.map((todo) => (
          todo.completed === false ? <div />
            : (
              <ContainerTodoComplete>
                <label htmlFor={todo.id} key={Math.random()}>
                  <input
                    type="checkbox"
                    id={todo.id}
                    name={todo.todoName}
                    onClick={() => handleCompleteTodo(todo)}
                    defaultChecked={todo.completed}
                  />
                  {todo.todoName}
                  <br />
                </label>
                <button type="button" onClick={() => handleDeleteTodo(todo)}>
                  <MdDeleteOutline size={25} />
                </button>
              </ContainerTodoComplete>
            )
        ))}
        <div className="ContainerDeleteAll">
          <button type="button" className="deleteAlLButton" onClick={handleDeleteAllTodos}>
            <MdDeleteOutline />
            <span>delete all</span>
          </button>
        </div>

      </div>
    </Container>
  );
}
