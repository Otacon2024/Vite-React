import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
