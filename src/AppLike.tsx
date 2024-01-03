import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function AppLike() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default AppLike;
