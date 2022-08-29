import { useState, useEffect, useCallback } from 'react';
import { Container, SearchBarContainer, NavigationBar } from './styles';
import Header from '../header';

export default function Home() {
  const [todoList] = useState([
    { id: Math.random(), tarefa: '1' },
    { id: Math.random(), tarefa: '2' },
    { id: Math.random(), tarefa: '3' },
    { id: Math.random(), tarefa: '4' },
    { id: Math.random(), tarefa: '5' },
  ]);
  const [todoName, setTodoName] = useState('');
  const [todoActiveList] = useState([]);
  const [viewAllList, setViewAllList] = useState(true);
  const [viewActiveList, setViewActiveList] = useState(false);
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
      todoActiveList.push({ id: event.target.id, tarefa: event.target.name });
    }

    if (!event.target.checked) {
      todoActiveList.splice(event.target);
    }
  }

  function handleViewList(event) {
    switch (event.target.id) {
      case 'activeButton':
        return (
          setViewActiveList(true),
          setViewAllList(false)
        );
      case 'allButton':
        return (
          setViewAllList(true),
          setViewActiveList(false)
        );
      default:
        return (
          setViewAllList(true)
        );
    }
  }

  useEffect(() => {
  }, [todoList, viewAllList, viewActiveList]);

  return (
    <Container>
      <Header />

      <NavigationBar>
        <button type="button" onClick={handleViewList} id="allButton">All</button>
        <button type="button" onClick={handleViewList} id="activeButton">Active</button>
        <button type="button">Completed</button>
      </NavigationBar>

      <SearchBarContainer>
        <input type="text" placeholder="add details" onChange={handleChangeText} />
        <button type="button" onClick={handleNewTodo}>Add</button>
      </SearchBarContainer>
      <div className="todoContainer">
        {viewAllList && (
          todoList.map((todo) => (
            <label htmlFor={todo.id} key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                name={todo.tarefa}
                onChange={handleChangeTodoStatus}
              />
              {todo.tarefa}
              <br />
            </label>
          ))
        )}

        {viewActiveList && (
          todoActiveList.map((todo) => (
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
          ))
        )}
      </div>

    </Container>

  );
}
