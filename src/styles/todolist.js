import styled, { createGlobalStyle } from "styled-components";

const TodoContainer = styled.div`
  background-color: #447572;
  width: 500px;
  height:550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 15px 64px 39px rgba(150, 150, 150, 0.42);
  overflow-y: scroll;

  @media (min-width: 375px) and (max-width: 812px) {
    width: 350px;
    height: 635px;
    padding: 5px 20px;
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const TodoHeader = styled.h2`
  margin:30px 0;
  font-size: 2rem;
  font-weight: 800;
  color:#fff;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 430px;
  padding: 7px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  @media (min-width: 375px) and (max-width: 812px) {
    width: 300px;
  }
`;

const Input = styled.input`
  width: 330px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
  @media (min-width: 375px) and (max-width: 812px) {
    width: 200px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3e8e41;
  }
`;

const AddInput = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  padding:5px 10px;
  margin-left: 10px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #c62828;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: #658491;
    color: #333;
    font-family: sans-serif;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media (min-width: 375px) and (max-width: 812px) {
      padding: 20px 5px;
      width: 100%;
      overflow-x: auto;
    }
  }

  .Mark{
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: white;
  }
`;

export {
  TodoContainer,
  TodoHeader,
  ListContainer,
  List,
  Input,
  Button,
  AddInput,
  DeleteButton,
  GlobalStyles,
};
