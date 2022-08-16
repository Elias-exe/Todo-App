import { useState, useEffect, useCallback } from 'react';
import { Container, SearchBarContainer } from './styles';
import Header from '../header';
import NavBar from '../navBar';

export default function Home() {
  const [todoList] = useState([
    { id: Math.random(), tarefa: 'aaa' },
  ]);
  const [todoName, setTodoName] = useState('');
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  function handleChangeText(event) {
    setTodoName(event.target.value);
  }

  function handleNewTodo() {
    todoList.push({ id: Math.random(), tarefa: todoName });
    forceUpdate();
  }

  function handleChangeTodoStatus(event) {
    if (event.target.checked) {
      console.log(`ID:${event.target.id}`);
    }
  }

  useEffect(() => {

  }, [todoList]);

  return (
    <Container>
      <Header />
      <NavBar />
      <SearchBarContainer>
        <input type="text" placeholder="add details" onChange={handleChangeText} />
        <button type="button" onClick={handleNewTodo}>Add</button>
      </SearchBarContainer>
      <div className="todoContainer">
        {todoList.map((todo) => (
          <label htmlFor={todo.id} key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.id}
              onClick={handleChangeTodoStatus}
            />
            {todo.tarefa}
            <br />
          </label>

        ))}
      </div>

    </Container>

  );
}
