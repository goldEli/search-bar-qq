import React from "react";
import "./style/index.css";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
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
            <img className="logo" src="https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=774740085" />
            <span title="叛逆*宝贝" className="name">叛逆*宝贝</span>
            <span title="384755" className="qq">384755</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
