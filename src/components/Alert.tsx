import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
      />
    </div>
  );
}

export default Alert;
