import React from "react";
import { IQQInfo } from "../../../types";

interface IResultProps {
  data?: IQQInfo;
}

const Result: React.FC<IResultProps> = (props) => {
  const { data } = props;
  const showResult = data?.code === 1;

  return (
    <>
      {showResult && (
        <div className="search-bar__results">
          <img className="logo" src={data?.qlogo} />
          <span title="叛逆*宝贝" className="name">
            {data?.name}
          </span>
          <span title="384755" className="qq">
            {data?.qq}
          </span>
        </div>
      )}
    </>
  );
};

export default Result;
