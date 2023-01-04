import { createContext, useEffect, useState } from "react";


export const ListContext = createContext();
const powerToDoList = "powerToDoList";

const ListProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    if (!!localStorage.getItem(powerToDoList)) {
      const temp = JSON.parse(localStorage.getItem(powerToDoList));
      setToDoList(temp);
    }
  }, []);

  const addTask = (task) => {
    const tempList = [...toDoList, task];
    updateList(tempList);
  };

  const setCompledted = (id) => {
    const tempList = [...toDoList];
    tempList[id].completed = !tempList[id].completed;

    updateList(tempList);
  };

  const removeTask = (id) => {
    const tempList = [...toDoList];
    tempList.splice(id, 1);
    updateList(tempList);
  };

  const updateList = (data) => {
    setToDoList(data);
    localStorage.setItem(powerToDoList, JSON.stringify(data));
  };

  return (
    <ListContext.Provider
      value={{ toDoList, addTask, setCompledted, removeTask }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
