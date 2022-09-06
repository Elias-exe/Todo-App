import {
  useState, useContext,
} from 'react';
import { TodoContext } from '../../components/context';
import { Container, SearchBarContainer, NavigationBar } from './styles';
import Header from '../../components/header';

export default function Home() {
  const { addToList, todoList } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const addHandler = () => {
    addToList(todoText);
  };

  console.log(todoList);

  return (
    <Container>
      <Header />

      <NavigationBar>
        <button type="button" id="allButton">All</button>
        <button type="button" id="activeButton">Active</button>
        <button type="button" id="completedButton">Completed</button>
      </NavigationBar>

      <SearchBarContainer>
        <input type="text" placeholder="add details" onChange={(e) => setTodoText(e.target.value)} />
        <button type="button" onClick={addHandler}>Add</button>
      </SearchBarContainer>
      <div className="todoContainer">
        {todoList.map((todo) => (
          <label htmlFor={todo.id} key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.tarefa}
            />
            {todo.tarefa}
            <br />
          </label>
        ))}
      </div>

    </Container>

  );
}
