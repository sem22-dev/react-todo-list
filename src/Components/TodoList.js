import React from "react";
import {TodoContainer, TodoHeader, ListContainer, List, Input, Button, AddInput, DeleteButton} from "../styles/todolist.js"

export default function TodoList() {
    const [todoItems, setTodoItems] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    function updateInputValue(event){
        setInputValue(event.target.value)
    }

    function addTodoItem() {
        if (inputValue.trim() !== '') {
            setTodoItems(prevItems => ([...prevItems, inputValue]));
            setInputValue('');
        }
    }

    function deleteTodoItem(index) {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    }

    React.useEffect(() => {
        const storedItems = localStorage.getItem("todoItems");
        if (storedItems) {
          setTodoItems(JSON.parse(storedItems));
        }
      }, []);

    React.useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
      }, [todoItems]);


    return(
        <TodoContainer>
            <TodoHeader>Todo List</TodoHeader>
            <AddInput>
                <Input value={inputValue} onChange={updateInputValue} onKeyPress={handleKeyPress} />
                <Button onClick={addTodoItem}>Add Item</Button>
            </AddInput>
            <ListContainer>
                {todoItems.map((item, index) => {
                    return (
                        <List key={index}>
                           {item}
                            <DeleteButton onClick={() => deleteTodoItem(index)}>x</DeleteButton>
                        </List>
                    )
                })}
            </ListContainer>
        </TodoContainer>
    )
}
