import {React, useState} from "react"
import TodoList from "./Components/TodoList"
import { GlobalStyles } from "./styles/todolist"
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme} from "./styles/theme"

export default function App(){

    const [isDark, SetIsDark] = useState(false)

    function handleToggle(){
        return SetIsDark(!isDark)
    }

    console.log(isDark)

    return(
        <ThemeProvider theme={isDark === false ? lightTheme:  darkTheme }>
            <GlobalStyles/>
            <p className="Mark">THOT 1.0</p>
            <TodoList isDark={isDark} handleToggle={handleToggle}/>
        </ThemeProvider>
    )
}