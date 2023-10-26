import { useState } from "react";

import "./App.css";
import MemoData from "./data/MemoItems.json";

import Memolist from "./components/memo/Memolist";
import Nav from "./components/nav/Nav";

const App = () => {
  const [data, changeData] = useState(MemoData.MemoItems);

  const addNewMemoItem = (newItem) => {
    const memoItem = { id: String(data.length + 1), ...newItem };
    changeData([memoItem, ...data]);
  };

  return (
    <div>
      <Nav addNewMemoItem={addNewMemoItem} />
      <div className="Memo">
        <Memolist data={data} />
      </div>
    </div>
  );
};

export default App;
