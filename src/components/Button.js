import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  background: #287c55;
`;

const Button = ({ label, type }) => {
  return (
    <StyledButton shape="round" type={type}>
      {label}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  type: "primary",
};
