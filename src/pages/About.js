import React from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";

const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const About = ({ demoby, heading }) => {
  // const handleClick = () => {
  //   alert("clicked!");
  // };

  return (
    <Container>
      <h1 data-testid="required-header">{heading}</h1>
      <div data-testid="name-2">Demo app by {demoby}</div>
      <br />
      <ul style={{ width: "40vw", margin: "auto" }}>
        <li>
          Redux reducer architecture, data population and React Testing Library
        </li>
        <li>React-redux useSelector and useDispatch</li>
        <li>
          Search component for car selection from fetched array, local storage
          usage
        </li>
        <li>Modal implementation for random photo fetching</li>
      </ul>

      {/* <Button onClick={handleClick} label="Button" /> */}
    </Container>
  );
};

export default About;
