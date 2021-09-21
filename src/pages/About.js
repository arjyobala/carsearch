import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";

const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const About = () => {
  const model = localStorage.getItem("carmake");
  const [carModel, setCarModel] = useState("");
  const selectedModel = useSelector((state) => state.cars.carModels);
  // const handleClick = () => {
  //   alert("clicked!");
  // };
  useEffect(() => {
    if (selectedModel) {
      console.log(selectedModel[0].value);
    }
  }, [selectedModel]);

  useEffect(() => {
    setCarModel(model);
  }, [selectedModel, model]);

  return (
    <Container>
      <h1 data-testid="required-header">Contents</h1>
      <div data-testid="required-name">Demo app by Arjyo</div>
      <p>
        MANUFACTURER : <span style={{ fontWeight: "700" }}>{carModel}</span>
      </p>
      <br />
      <ul
        style={{ width: "40vw", margin: "auto" }}
        data-testid="required-content"
      >
        <li>
          Redux reducer architecture, data population and React Testing Library
        </li>
        <li>React-redux useSelector and useDispatch</li>
        <li>
          Search component for car selection from fetched array, local storage
          usage
        </li>
        <li>Modal implementation for random photo fetching</li>
        <li>Multi tab data sync</li>
      </ul>

      {/* <Button onClick={handleClick} label="Button" /> */}
    </Container>
  );
};

export default About;
