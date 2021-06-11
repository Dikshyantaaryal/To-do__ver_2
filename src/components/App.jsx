import React from "react";

function App() {
  let newItem;
  let newarray = [];
  const [item, setItem] = React.useState([]);

  function changeHandler(event) {
    newItem = event.target.value;
  }

  function clickHandler() {
    item.push(newItem);
    Array.prototype.push.apply(newarray, item);
    setItem(newarray);
    document.getElementById("myInput").value = "";
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          id="myInput"
          type="text"
          onChange={changeHandler}
          placeholder="New Item"
        />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
