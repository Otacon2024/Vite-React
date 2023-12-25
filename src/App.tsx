import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Alert>My Alert</Alert>
      <Button onClick={() => console.log("clicked")}>My button</Button>;
    </>
  );
}

export default App;
