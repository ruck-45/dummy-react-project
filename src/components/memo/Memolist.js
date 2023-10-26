import "./Memolist.css";

import MemoItem from "./MemoItem";
import Card from "../utils/Card";

const Memolist = (props) => {
  return (
    <Card className="MemoListContainer">
      {props.data.map((memoItem) => {
        return <MemoItem key={memoItem.id} date={memoItem.date} title={memoItem.title} cost={memoItem.cost} />;
      })}
    </Card>
  );
};

export default Memolist;
