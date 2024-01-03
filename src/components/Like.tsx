import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={() => setStatus(false)} />
    );
  return <AiOutlineHeart size={20} onClick={() => setStatus(true)} />;
};

export default Like;
