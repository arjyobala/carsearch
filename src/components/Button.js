import React from "react";
import { Button as AntButton } from "antd";

const Button = ({ label, type }) => {
  return <AntButton type={type}>{label}</AntButton>;
};

export default Button;

Button.defaultProps = {
  type: "primary",
};
