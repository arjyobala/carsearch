import React from "react";
import { Select as AntSelect } from "antd";
import styled from "styled-components";

const { Option } = AntSelect;

const StyledSelect = styled(AntSelect)`
  @media (max-width: 768px) {
    width: 50% !important;
  }
`;

const Select = ({
  options,
  filterOption,
  filterSort,
  optionFilterProp,
  onChange,
  placeholder,
}) => {
  return (
    <StyledSelect
      showSearch
      placeholder={placeholder}
      optionFilterProp={optionFilterProp}
      filterOption={filterOption}
      filterSort={filterSort}
      style={{ width: 300 }}
      onChange={onChange}
    >
      {options
        ? options.map((item, index) => (
            <Option key={index + 1} value={item.value}>
              {item.value}
            </Option>
          ))
        : null}
    </StyledSelect>
  );
};

export default Select;
