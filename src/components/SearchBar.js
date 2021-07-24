import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import Select from "./Select";
import Button from "./Button";

const SearchContainer = styled.div`
  display: flex;
  margin: 30px auto;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSelect = styled(Select)`
  @media (max-width: 768px) {
    width: 50% !important;
  }
`;
const SearchBar = ({ makes }) => {
  return (
    <SearchContainer>
      <StyledSelect
        showSearch
        options={makes}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      />
      <StyledSelect />
      <styledSelect />
      <Button label="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
