import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 500px;

.todoContainer{
  font-size: 18px;
  width: 100%;
  margin-top: 32px;
}

.deleteAlLButton{
  margin-top: 32px;
  display: flex;
  align-items: center;
  background-color: #EB5757;
  padding: 20px;
  border: none;
  color: white;
  border-radius: 4px;

  span{
    margin-left: 5px;
  }
}

.ContainerDeleteAll{
  display: flex;
  justify-content: flex-end;
}
`;

export const ContainerTodoComplete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    border: none;
    background: transparent;
  }

  input{
    margin-right: 7px;
  }

  & + & {
    margin-top: 22px;
  }
`;
