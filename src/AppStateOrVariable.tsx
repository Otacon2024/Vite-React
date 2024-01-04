import { useState } from "react";

const AppStateOrVariable = () => {
  // [false, true]
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
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

export default AppStateOrVariable;
