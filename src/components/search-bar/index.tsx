import React, { memo, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useQQInfo from "../../hooks/useQQInfo";
import Loading from "../loading";
import ShowMessage from "../show-message";
import Result from "./result";
import "./style/index.css";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>();
  const searchValueDebounce = useDebounce(searchValue, 500);
  const [errorMessage, setErrorMessage] = useState<string>();
  const qqStr = !!errorMessage ? "" : searchValueDebounce;
  const [data, isLoading] = useQQInfo(qqStr);

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

  const Search = (
    <>
      <label className="search-bar__label">QQ</label>
      <input
        data-testid="qq-input"
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
    </>
  );

  return (
    <div className="search-bar">
      <h1>QQ号查询</h1>
      {Search}
      <ShowMessage
        show={showErrorMessage}
        message={errorMessage}
        type="error"
      />
      <Loading loading={isLoading}>
        <ShowMessage show={showEmptyMessage} message="没有查询到对应QQ号" />
        <Result data={data} />
      </Loading>
    </div>
  );
};

export default memo(SearchBar);
