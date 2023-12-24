import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "Paris", "New York", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
