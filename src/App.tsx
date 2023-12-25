import Button from "./components/Button";

function App() {
  return (
    <Button color="secondary" onClick={() => console.log("clicked")}>
      My button
    </Button>
  );
}

export default App;
