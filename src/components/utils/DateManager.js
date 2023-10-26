const DateManager = (props) => {
  const date = new Date(props.date)
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <p>
      {`${year} / ${month} / ${day}`}
    </p>
  );
};

export default DateManager;
