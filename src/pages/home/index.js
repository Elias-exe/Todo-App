import {
  useState, useContext,
} from 'react';
import { TodoContext } from '../../components/context';
import { Container, SearchBarContainer } from './styles';
import NavBar from '../../components/navBar';
import Header from '../../components/header';

export default function Home() {
  const { addToList, todoList } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  function handleChangeTodoText(event) {
    setTodoText(event.target.value);
  }

  function handleAddNewTodo() {
    addToList(todoText);
  }

  return (
    <Container>
      <Header />

      <NavBar />

      <SearchBarContainer>
        <input type="text" placeholder="add details" onChange={handleChangeTodoText} />
        <button type="button" onClick={handleAddNewTodo}>Add</button>
      </SearchBarContainer>
      <div className="todoContainer">
        {todoList.map((todo) => (
          <label htmlFor={todo.id} key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.todoName}
            />
            {todo.todoName}
            <br />
          </label>
        ))}
      </div>

    </Container>

  );
}
