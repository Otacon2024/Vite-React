function ListGroup() {
  const items = ["London", "Paris", "New York", "Tokyo"];

  if (items.length === 0) return <p>There are no items in the list</p>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
