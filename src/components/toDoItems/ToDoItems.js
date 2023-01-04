import React, { useContext } from "react";
import { List } from "@mui/material";
import ToDoItem from "./toDoItem/ToDoItem";
import { ListContext } from "../../context/ListProvider";

function ToDoItems() {
  const { toDoList, removeTask, setCompledted } = useContext(ListContext);
  let taskList = [];

  if (!!toDoList) {
    taskList = toDoList.map((task, i) => {
      return <ToDoItem key={i} task={task} remove={()=>removeTask(i)}  update={()=>setCompledted(i)}/>;
    });
  }

  return <List>{taskList}</List>;
}

export default ToDoItems;
