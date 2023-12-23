function ListGroup() {
  let items = ["London", "Paris", "New York", "Tokyo"];
  items = [];

  //const message = items.length === 0 ? "There are no items in the list" : null;
  const getMessage = () => {
    return items.length === 0 ? "There are no items in the list" : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
