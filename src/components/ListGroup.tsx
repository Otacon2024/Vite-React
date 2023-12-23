function ListGroup() {
  let items = ["London", "Paris", "New York", "Tokyo"];
  let selectedItem = -1;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "There are no items in the list"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
