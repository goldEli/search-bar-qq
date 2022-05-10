import React from "react";
import useQQInfo from "../../hooks/useQQInfo";
import "./style/index.css";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
	const [data, isLoading, error] = useQQInfo();
	console.log('%c [ data, isLoading, error ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', data, isLoading, error)

  return (
    <div className="search-bar">
      <h1>QQ号查询</h1>
      <div>
        <label className="search-bar__label">QQ</label>
        <input
          className="search-bar__input"
          type="text"
          placeholder="请输入QQ号"
        />
        <div className="search-bar__results">
            <img className="logo" src={data?.qlogo} />
            <span title="叛逆*宝贝" className="name">{data?.name}</span>
            <span title="384755" className="qq">{data?.qq}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
