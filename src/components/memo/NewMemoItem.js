import React, { useState } from "react";

import "./NewMemoItem.css";

import Card from "../utils/Card";
import Button from "../utils/Button";

const NewMemoItem = (props) => {
  let className = "NewMemoItem " + props.className;

  const [date, changeDate] = useState("");
  const [title, changeTitle] = useState("");
  const [cost, changeCost] = useState("");

  const updateTitle = (event) => {
    changeTitle(event.target.value);
  };

  const updateCost = (event) => {
    changeCost(Number(event.target.value));
  };

  const updateDate = (event) => {
    changeDate(event.target.value);
  };

  const addMemoItem = () => {
    const MemoItem = {
      title: title,
      cost: cost,
      date: date,
    };

    props.addNewMemoItem(MemoItem);

    changeTitle("");
    changeCost("");
    changeDate("");
  };

  return (
    <Card className={className} style={props.style}>
      <div className="MemoInfo">
        <div>
          <div>Date</div>
          <input type="date" name="" id="" value={date} onChange={updateDate} />
        </div>
        <div>
          <div>Title</div>
          <input type="text" name="" id="" value={title} onChange={updateTitle} />
        </div>
        <div>
          <div>Price ($)</div>
          <input type="text" name="" id="" value={cost} onChange={updateCost} />
        </div>
      </div>
      <Button clickFunction={addMemoItem}>Submit</Button>
    </Card>
  );
};

export default NewMemoItem;
