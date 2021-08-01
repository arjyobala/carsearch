import React from "react";
import { Input, Select } from "antd";
import styled from "styled-components";
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
  width: 400px;
  @media (max-width: 768px) {
    width: 200px !important;
  }
`;

const { Option } = Select;

const SearchBar = ({ makes }) => {
  console.log(makes);
  return (
    <SearchContainer>
      <StyledSelect
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      ></StyledSelect>

      <Button label="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
