import React from "react";
import { Select as AntSelect } from "antd";
import styled from "styled-components";

const { Option } = AntSelect;

const StyledSelect = styled(AntSelect)`
  @media (max-width: 768px) {
    width: 50% !important;
  }
`;

const Select = ({ options, filterOption, filterSort }) => {
  return (
    <StyledSelect
      options={options}
      optionFilterProp="children"
      filterOption={filterOption}
      filterSort={filterSort}
      defaultValue="lucy"
      style={{ width: 120 }}
    >
      {options
        ? options.map((item) => (
            <Option key={item.Make_ID} value={item.Make_Name}>
              {item.Make_Name}
            </Option>
          ))
        : null}
    </StyledSelect>
  );
};

export default Select;
