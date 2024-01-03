import { useState } from "react";

const App = () => {
  const [isVisible, setVisibility] = useState(false);
  let count = 0;

  const handleClick = () => {
    setVisibility(!isVisible);
    count++;
    console.log(isVisible);
    console.log(count);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default App;
