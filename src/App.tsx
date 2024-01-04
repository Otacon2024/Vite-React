import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;

  return (
    <>
      <div>
        {fullName}
        <br />
        {firstName} + " " + {lastName}
      </div>
    </>
  );
};

export default App;
