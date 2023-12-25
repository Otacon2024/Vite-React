// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // let items = ["London", "Paris", "New York", "Tokyo"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
      <Alert>
        Hellow <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;
