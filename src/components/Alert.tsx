import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">{children}</div>
  );
}

export default Alert;
