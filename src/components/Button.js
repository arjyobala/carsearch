import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)``;

const Button = ({ label, type }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export default Button;

Button.defaultProps = {
  type: "primary",
};
