import React from "react";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const Select = () => {
  return (
    <AntSelect
      defaultValue="lucy"
      style={{ width: 120 }}
      //   onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </AntSelect>
  );
};

export default Select;
