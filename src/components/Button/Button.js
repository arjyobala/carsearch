import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  background: #287c55;
  width: 150px;
`;

const Button = ({ label, type, disabled, onClick }) => {
  return (
    <StyledButton
      shape="round"
      type={type}
      disabled={disabled}
      onClick={onClick}
      data-testid="button"
    >
      {label}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  type: "primary",
  disabled: false,
};
