import React, { useState, useRef, useEffect } from "react";
import AddInput from "./AddInput";
import List from "./List";
import NoTask from "./NoTask";

export default function AddToDoList() {
  const [toDoList, setToDoList] = useState({
    titleId: 1, // Starting ID
    title: [],
  });
  const [showAddField, setShowAddField] = useState(false);
  const listTitle = useRef(null);
  useEffect(() => {}, [toDoList]);

  function addField() {
    if (showAddField) {
      const listTitleValue = listTitle.current.value;

      if (listTitleValue.trim() !== "") {
        setToDoList((prevToDoList) => {
          const newTitle = { id: prevToDoList.titleId, title: listTitleValue };
          return {
            ...prevToDoList,
            titleId: prevToDoList.titleId + 1, // Increment ID for next item
            title: [...prevToDoList.title, newTitle],
          };
        });
      }
      listTitle.current.value = "";
      setShowAddField(false);
    } else {
      setShowAddField(true);
    }
  }

  function handleDeleteList(itemId) {
    setToDoList((prevState) => ({
      ...prevState,
      title: prevState.title.filter((item) => item.id !== itemId),
    }));
  }

  return (
    <div className="main-content">
      <div className="d-flex justify-content-between">
        <h1>{showAddField ? "Add New To-Do" : "To-Do List"}</h1>
        <button
          type="button"
          onClick={addField}
          className="save grow-on-hover link"
        >
          {showAddField ? "Save" : "Add New Task"}
        </button>
      </div>

      <div className="list-section">
        {showAddField && <AddInput ref={listTitle} />}
      </div>
      {toDoList.title.length > 0 && (
        <List
          list={toDoList.title}
          onDelete={(itemId) => handleDeleteList(itemId)}
        />
      )}
      {toDoList.title.length == 0 && <NoTask addField={addField} />}
    </div>
  );
}
