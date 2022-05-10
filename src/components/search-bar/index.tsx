import React, { memo, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useQQInfo from "../../hooks/useQQInfo";
import Loading from "../loading";
import ShowMessage from "../show-message";
import "./style/index.css";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>();
  const searchValueDebounce = useDebounce(searchValue, 500);
  const [errorMessage, setErrorMessage] = useState<string>();
  const qqStr = !!errorMessage ? "" : searchValueDebounce
  const [data, isLoading] = useQQInfo(qqStr);
  const showResult = data?.code === 1 && !!searchValue;
  const showEmptyMessage = !!data && data?.code !== 1;
  const showErrorMessage = !!errorMessage;

  const handleError = (value: string) => {
    const qqReg = /^[1-9]\d*$/;
    if (!value) {
      setErrorMessage("QQ号不能为空");
    } else if (!qqReg.test(value)) {
      setErrorMessage("QQ号为数字, 且开头不为0");
    } else {
      setErrorMessage("");
    }
    setSearchValue(value);
  };

  const RESULT = (
    <div>
      <Loading loading={isLoading}>
        <ShowMessage show={showEmptyMessage} message="没有查询到对应QQ号" />
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
      </Loading>
    </div>
  );

  return (
    <div className="search-bar">
      <h1>QQ号查询</h1>
      <div>
        <label className="search-bar__label">QQ</label>
        <input
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value.trim();
            handleError(value);
            setSearchValue(value);
          }}
          className="search-bar__input"
          type="text"
          placeholder="请输入QQ号"
        />
        <ShowMessage
          show={showErrorMessage}
          message={errorMessage}
          type="error"
        />
        {RESULT}
      </div>
    </div>
  );
};

export default memo(SearchBar);
