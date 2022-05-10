import React from "react";
import "./index.css";

interface ILoadingProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = (props) => {
  if (!props.loading) {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Loading;
