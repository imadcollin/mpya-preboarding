import React, { useState, useEffect } from "react";
import Header from "./Components/header-component/Header-component";
import Add from "./Components/header-component/AddItem-component";
import TodoList from "./Components/header-component/TodoList-component";
import "./App.css";

import Crud from "./Crud";
import MockApi from "./MockApi";
import AddIcon from "./Components/header-component/Add-icon";
const App = () => {
  const [items, setItems] = useState([]);
  const [titleState, setTitle] = useState("");
  const [creatorState, setCreator] = useState("");

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const fetchGetAllItems = async () => {
      const items = await MockApi.getAllItems();

      setItems(items);
    };
    fetchGetAllItems();
  }, []);
  {
    /************************************************************ */
  }

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((prev) => prev.id !== id);
    });
  };
  {
    /************************************************************ */
  }
  const addItem = ({ title, creator }) => {
    if (!title) {
      alert("Please type something... ");
    } else {
      const item = MockApi.createItem(title, creator);
      setItems((prev) => {
        return [item, ...prev];
      });
    }
  };
  {
    /************************************************************ */
  }
  const update = (id, title, creator, index) => {
    setCreator(null);
    setTitle(null);
    handleShow();

    let newItems = [...items];
    newItems[index].creator = creatorState;
    newItems[index].title = titleState;
    setItems(newItems);
  };
  {
    /************************************************************ */
  }

  const handleShow = () => {
    setIsActive(!isActive);
  };
  {
    /************************************************************ */
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      {/************************************************************ */}
      <div className="app-container">
        <div className="flex-item">
          <div>
            <Header></Header>

            <TodoList
              items={items}
              deleteItem={deleteItem}
              update={update}
            ></TodoList>
            {isActive ? (
              <span onClick={handleShow}>
                <AddIcon></AddIcon>
              </span>
            ) : null}
          </div>

          {!isActive ? (
            <div>
              <Add
                items={items}
                title={titleState}
                creator={creatorState}
                onTextChanged={setTitle}
                onCreatorChanged={setCreator}
                addItem={addItem}
                handle={handleShow}
              ></Add>
            </div>
          ) : null}
          {/* Integrated with Mlab */}
          {/* <Crud></Crud> */}
        </div>
      </div>
    </div>
  );
};

export default App;
