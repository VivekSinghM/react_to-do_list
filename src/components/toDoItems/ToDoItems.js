import React from 'react'
import { List } from "@mui/material";
import ToDoItem from './toDoItem/ToDoItem'

function ToDoItems() {
    const tasks=[<ToDoItem/>]
  return (
    <List>
        {tasks}
    </List>
  )
}

export default ToDoItems