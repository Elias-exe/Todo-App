import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 500px;

.todoContainer{
  display: inline-block;
  font-size: 18px;
  width: 100%;
  margin-top: 32px;

  input{
    margin-right: 7px;
    margin-bottom: 29px;
  }
}
`;

export const SearchBarContainer = styled.div`
width: 100%;
margin-top: 18px;
display: flex;
justify-content: space-between;
  input{
    width: 100%;
    padding: 12px 20px;
    border: none;
    border: 1px solid #BDBDBD;
    border-radius: 12px;
    margin-right: 25px;

  }
  button{
    padding: 20px;
    border-radius: 12px;
    border: none;
    background: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    color: white;
  }
`;

export const NavigationBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #BDBDBD;

  button{
    border: none;
    background: transparent;
    padding: 15px 45px;
    font-size: 14px;
  }
`;
