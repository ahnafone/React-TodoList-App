import React, { useState } from "react";
import List from "./List";
import InputItem from "./InputItem";

function App() {
  var [items, setItems] = useState([]);

  function addItem(item) {
    if (item.value === "") return;

    item.key = items.length;
    var prev = [...items, item];
    setItems(prev);
  }

  function crossItem(index) {
    var temp = [...items];
    temp[index].crossed = true;
    setItems(temp);
  }

  function uncrossItem(index) {
    var temp = [...items];
    temp[index].crossed = false;
    setItems(temp);
  }

  function deleteItems() {
    var temp = [...items];

    //delete elems for which crossed attr = true
    items.forEach(elem => {
      if (elem.crossed) {
        var index;

        //locate index of elem before deleting
        temp.forEach((e, i) => {
          if (e.key === elem.key) index = i;
        });
        temp.splice(index, 1);
      }
    });

    //fix key values after deleting entries
    temp.forEach((e, i) => {
      e.key = i;
    });

    setItems(temp);
  }

  return (
    <div className="container">
      <InputItem click={addItem} />
      <List items={items} cross={crossItem} uncross={uncrossItem} />
      <button
        onClick={() => {
          deleteItems();
        }}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}

export default App;
