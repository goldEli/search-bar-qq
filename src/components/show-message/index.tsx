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
  return <div style={style}>{props.message}</div>;
};

ShowMessage.defaultProps = {
  show: false,
  message: "No data",
  type: "info",
};

export default memo(ShowMessage);
