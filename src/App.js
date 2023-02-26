import React from "react"
import TodoList from "./Components/TodoList"
import { GlobalStyles } from "./styles/todolist"

export default function App(){

    return(
        <>
            <GlobalStyles/>
            <p className="Mark">THOT 1.0</p>
            <TodoList />
        </>
    )
}