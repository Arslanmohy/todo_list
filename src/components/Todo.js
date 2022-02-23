import React from "react";
import { useState } from "react";
import "./style.scss";
import img from "../assets/todo.svg";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const addItem = () => {
    if (!input) {
      alert("input field is empty");
    } else {
      const inputWithId = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItem([...item, inputWithId]);
      setInput("");
    }
  };
  const deleteItem = (para) => {
    const afterDeleteItems = item.filter((curr) => {
      return curr.id !== para;
    });
    setItem(afterDeleteItems);
  };
  const removeAll = () => {
    setItem([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={img} alt="" />
            <figcaption>Add your list </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="😄 Add item"
              className="form-control"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <i class="fa fa-plus  " onClick={addItem}></i>
          </div>
          {/* show item */}
          <div className="showItems">
            {item.map((curEle, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curEle.name}</h3>
                  <div className="todo-btn">
                    <i class="far fa-edit  add-btn"></i>
                    <i
                      class="far fa-trash-alt  add-btn"
                      onClick={() => deleteItem(curEle.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove item */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
