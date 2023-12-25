import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisibility === true && <Alert>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(!alertVisibility)}>
        My button
      </Button>
    </>
  );
}

export default App;
