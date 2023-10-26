import React, { useState } from "react";

import "./MemoItem.css";

import DateManager from "../utils/DateManager";
import Card from "../utils/Card";
import Button from "../utils/Button";

const MemoItem = (props) => {
  const [date, changeDate] = useState(props.date);
  const [title, changeTitle] = useState(props.title);
  const [cost, changeCost] = useState(props.cost);

  const [editDate, changeEditDate] = useState(date);
  const [editTitle, changeEditTitle] = useState(title);
  const [editCost, changeEditCost] = useState(cost);

  const [price, changePrice] = useState(cost > 0 ? `+${cost} $` : `${cost} $`);
  const [priceClass, changePriceClass] = useState(cost > 0 ? "MemoItemPrice profit" : "MemoItemPrice loss");

  const [editStatus, editStatusChange] = useState(false);

  const updatePrice = (newCost) => {
    if (newCost >= 0) {
      changePrice(`+${newCost} $`);
      changePriceClass("MemoItemPrice profit");
    } else {
      changePrice(`${newCost} $`);
      changePriceClass("MemoItemPrice loss");
    }
  };

  const change = () => {
    if (editDate !== date || editTitle !== title || editCost !== cost) {
      return true;
    } else {
      return false;
    }
  };

  const EditMemoItem = () => {
    if (editStatus & change()) {
      if (window.confirm("Change Memo Item ?")) {
        changeDate(editDate);
        changeTitle(editTitle);
        changeCost(editCost);
        updatePrice(editCost);
      }
    }

    editStatusChange(!editStatus);
  };

  const updateEditDate = (event) => {
    changeEditDate(event.target.value);
  };

  const updateEditTitle = (event) => {
    changeEditTitle(event.target.value);
  };

  const updateEditCost = (event) => {
    changeEditCost(event.target.value);
  };

  return (
    <div className="MemoItemHolder">
      <Card className="MemoItemBox">
        <div className="MemoItemDate" style={{ display: editStatus ? "none" : "flex" }}>
          <DateManager date={date} />
        </div>
        <div className="MemoItemDate" style={{ display: editStatus ? "flex" : "none" }}>
          <input type="date" name="" id="" value={editDate} onChange={updateEditDate} />
        </div>
        <div className="MemoItemTitle" style={{ display: editStatus ? "none" : "flex" }}>
          <p>{title}</p>
        </div>
        <div className="MemoItemTitle" style={{ display: editStatus ? "flex" : "none" }}>
          <input type="text" name="" id="" value={editTitle} onChange={updateEditTitle} />
        </div>
        <div className={priceClass} style={{ display: editStatus ? "none" : "flex" }}>
          <p>{price}</p>
        </div>
        <div className={priceClass} style={{ display: editStatus ? "flex" : "none" }}>
          <input type="number" name="" id="" value={editCost} onChange={updateEditCost} />
        </div>
        <Button className="MemoItemEditBtn" clickFunction={EditMemoItem}>
          {editStatus ? "Submit" : "Edit"}
        </Button>
      </Card>
    </div>
  );
};

export default MemoItem;
