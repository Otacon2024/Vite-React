function ListGroup() {
  let items = ["London", "Paris", "New York", "Tokyo"];
  items = [];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 ? <p>There are no items in the list</p> : null}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
