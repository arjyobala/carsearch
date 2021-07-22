import React from "react";
import { Input } from "antd";
import Select from "./Select";
import Button from "./Button";

const SearchBar = () => {
  return (
    <div>
      <Select />
      <Button label="Search" />
    </div>
  );
};

export default SearchBar;
