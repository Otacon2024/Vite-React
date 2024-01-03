import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";

function AppButton() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisibility === true && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(!alertVisibility)}>
        My button
      </Button>
    </>
  );
}

export default AppButton;
