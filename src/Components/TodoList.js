import React from "react";
import {TodoContainer, TodoHeader, ListContainer, List, Input, Button, AddInput, DeleteButton, Button2, SmallText } from "../styles/todolist.js"


export default function TodoList() {
    const [todoItems, setTodoItems] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    function updateInputValue(event){
        setInputValue(event.target.value)
    }

    function addTodoItem() {
        if (inputValue.trim() !== '') {
            setTodoItems(prevItems =>
            ([...prevItems, {text : inputValue, timeStamp:  new Date().toLocaleString('en-US',
                        { hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        day: "2-digit",
                        month: 'short',
                        year: 'numeric',
                   })}]));
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


      function clearAllItems() {
        setTodoItems([]);
    }

    return(
        <TodoContainer>
            <TodoHeader>Todo List</TodoHeader>
            <AddInput>
                <Input value={inputValue} onChange={updateInputValue} onKeyPress={handleKeyPress} />
                <Button onClick={addTodoItem}><i class="fa-solid fa-plus"></i></Button>
            </AddInput>
            <ListContainer>
                {todoItems.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <SmallText>{item.timeStamp}</SmallText>
                            <List>
                                {item.text}
                                <DeleteButton onClick={() => deleteTodoItem(index)}><i class="fa-solid fa-trash"></i></DeleteButton>
                            </List>
                        </React.Fragment>
                    )
                })}
                {todoItems.length > 4 &&
                    <Button2 todoItems={todoItems} onClick={clearAllItems}>Clear All</Button2>
                }
            </ListContainer>
        </TodoContainer>
    )

}
