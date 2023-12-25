import Button from "./components/Button";

function App() {
  return (
    <Button color="primary" onClick={() => console.log("clicked")}>
      My button
    </Button>
  );
}

export default App;
