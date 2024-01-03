import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (status) return <AiFillHeart color="#ff6b81" size={20} />;
  return <AiOutlineHeart size={20} />;
};

export default Like;
