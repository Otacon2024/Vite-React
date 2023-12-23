function ListGroup() {
  let items = ["London", "Paris", "New York", "Tokyo"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "There are no items in the list"}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
