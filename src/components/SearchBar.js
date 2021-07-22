import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import Select from "./Select";
import Button from "./Button";

const SearchContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 20px;
  justify-content: center;
`;
const SearchBar = () => {
  return (
    <SearchContainer>
      <Select />
      <Select />
      <Select />
      <Button label="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
