import { createContext, useState } from "react";

export const ListContext = createContext();

const ListProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const addTask = (task) => {
    setToDoList([...toDoList, task]);
  };
  const addAllTask = (tasks) => {
    setToDoList([...toDoList, ...tasks]);
  };
  const removeTask = (id) => {
    const tempList = [...toDoList];
    tempList.splice(id, 1);
    setToDoList(tempList);
  };
  return (
    <ListContext.Provider value={(toDoList, addAllTask, addTask, removeTask)}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider