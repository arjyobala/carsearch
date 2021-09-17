import React from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";

const StyledButton = styled.button`
  background: lightblue;
`;

const About = ({ demoby, heading }) => {
  const handleClick = () => {
    alert("clicked!");
  };
  return (
    <div>
      <h1 data-testid="required-header">{heading}</h1>
      <div data-testid="name-2">{demoby}</div>
      <Button onClick={handleClick} label="Button" />
    </div>
  );
};

export default About;
