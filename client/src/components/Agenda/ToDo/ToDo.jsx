import React, { useState } from "react";

export default function ToDo() {
  const [toDoItems, setToDoItems] = useState([]);
  const [newToDoItem, setNewToDoItem] = useState("");

  function handleAddToDoItem() {
    if (newToDoItem.trim() !== "") {
      setToDoItems([...toDoItems, newToDoItem]);
      setNewToDoItem("");
    }
  }

  function handleRemoveToDoItem(index) {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  }

  return (
    <div className=" w-96 h-36 text-2xl">
      <h1 className="flex justify-center bg-indigo-200 items-center text-center">Lista de tareas</h1>
      <div className="flex flex-col justify-center items-center">
        <input
        className="m-2 w-96 h-10 flex items-center justify-center"
          type="text"
          value={newToDoItem}
          onChange={(event) => setNewToDoItem(event.target.value)}
          maxLength={35}
        />
        <button className="bg-buttonBlue w-32 h-10 rounded-md shadow-lg flex justify-center items-center text-xl" onClick={handleAddToDoItem}>Agregar tarea</button>
      </div>
      <ul>
        {toDoItems.map((item, index) => (
            <div className="columns-2 bg-bgHome m-auto mt-5"> 
          <li className="m-auto " key={index}>
            {item}
            <button className=" text-white flex items-end justify-end m-auto bg-logo" onClick={() => handleRemoveToDoItem(index)}>Eliminar</button>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

