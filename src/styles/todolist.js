import styled, { createGlobalStyle } from "styled-components";

const TodoContainer = styled.div`
  background-color: ${props => props.isDark ? props.theme.backgroundColorContainer : props.theme.backgroundColorContainer};
  width: 500px;
  height:550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${props => props.isDark ? "0px 6px 57px 9px rgba(150, 150, 150, 0.44)" : "0px 15px 64px 39px rgba(150, 150, 150, 0.42)"};


  overflow-y: scroll;
  position: relative;

  @media (min-width: 375px) and (max-width: 812px) {
    width: 350px;
    height: 635px;
    padding: 5px 20px;
    overflow-x: hidden;
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

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

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
  color: ${props => props.isDark ? props.theme.fontColor : props.theme.fontColor};
  border : ${props => props.isDark ? props.theme.border : props.theme.border };
  align-items: center;
  justify-content: space-between;
  width: 430px;
  padding: 7px;
  margin-bottom: 10px;
  background-color: ${props => props.isDark ? props.theme.liBackground : props.theme.liBackground};
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  @media (min-width: 375px) and (max-width: 812px) {
    width: 300px;
  }
`;

const Input = styled.input`
  width: 380px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
  @media (min-width: 375px) and (max-width: 812px) {
    width: 250px;
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
  &.night{
    position: absolute;
    right: 30px;
    border-radius: 50%;
    background-color: ${props => props.isDark ? props.theme.nightBackground : props.theme.nightBackground};
    color: ${props => props.isDark ? props.theme.nightColo : props.theme.nightColo};
    width: 30px ;
    height: 30px;
    padding: 2px ;
    @media (min-width: 375px) and (max-width: 812px) {
    width: 25px;
    height: 25px;
  }
  }
`;

 const Button2 = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #3e8e41;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3e8e41;
  }
  position: fixed;
  bottom:70px;
  box-shadow: 0px 9px 48px -2px rgba(6, 4, 4, 0.48);

  @media (min-width: 375px) and (max-width: 812px) {
    position: static
  }
`

const AddInput = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  padding:5px 10px;
  margin-left: 10px;
  background-color: transparent;
  color: ${props => props.isDark ? props.theme.deleteColor : props.theme.deleteColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
  }
`;

const SmallText = styled.small`
  margin: 0px 0px 3px 310px;
  color: white;
  font-size: 0.7em;
  @media (min-width: 375px) and (max-width: 812px) {
    width: 200px;
    font-size: 0.6em;
  }
  `

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${props => props.isDark ? props.theme.bodyBackground : props.theme.backgroundColorContainer};
    color: #333;
    font-family: sans-serif;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    @media (min-width: 375px) and (max-width: 812px) {
      padding: 20px 15px;
      width: 100%;
    }
  }

  .Mark{
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: white;
    @media (min-width: 375px) and (max-width: 812px) {
    position: static;
      color: gray;
      margin-bottom: 10px;
  }
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
  Button2,
  SmallText,
  HeaderContainer,
  GlobalStyles,
};
