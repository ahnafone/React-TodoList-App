import React, { useState } from "react";

function InputItem(props) {
  var [item, setItem] = useState("");

  function handleChange(event) {
    var newItem = event.target.value;
    setItem(newItem);
  }
  function clearInput() {
    setItem("");
  }

  return (
    <div>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="item" value={item} />
        <button
          onClick={() => {
            var sendItem = {
              key: 0,
              value: item,
              crossed: false
            };
            props.click(sendItem);
            clearInput();
          }}
        >
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default InputItem;
