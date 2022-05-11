import React, { memo, useMemo } from "react";

interface IShowMessageProps {
  show?: boolean;
  message?: string;
  type?: "info" | "error";
}

const ShowMessage: React.FC<IShowMessageProps> = (props) => {
  const style = useMemo(
    () => ({ color: props.type === "info" ? "black" : "red", fontSize: "12px" }),
    [props.type]
  );
  if (!props.show) {
    return <></>
  }
  return <span data-testid="show-message" style={style}>{props.message}</span>;
};

ShowMessage.defaultProps = {
  show: false,
  message: "No data",
  type: "info",
};

export default memo(ShowMessage);
