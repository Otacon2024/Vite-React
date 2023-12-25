import { ReactNode } from "react";

interface Props {
  // text: string;
  children: ReactNode;
}

function Alert({ children }: Props) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert;
