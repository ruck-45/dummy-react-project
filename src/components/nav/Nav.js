import { useState } from "react";

import "./Nav.css";

import Button from "../utils/Button";
import NewMemoItem from "../memo/NewMemoItem";

const Nav = (props) => {
  const [addItemDialogueStatus, addItemDialogueStatusChange] = useState(false);

  const addItemDialogue = () => {
    addItemDialogueStatusChange(!addItemDialogueStatus);
  };

  return (
    <div className="NavWrapper">
      <div className="Navbar">
        <h1>Memo</h1>
        <Button clickFunction={addItemDialogue}>Add Item</Button>
      </div>
      <NewMemoItem
        className="NavItemAdder"
        addNewMemoItem={props.addNewMemoItem}
        style={{ display: addItemDialogueStatus ? "flex" : "none" }}
      />
    </div>
  );
};

export default Nav;
