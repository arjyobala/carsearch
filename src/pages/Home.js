import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/ContentCard";
import SearchBar from "../components/SearchBar";
import Select from "../components/Select/Select";
import styled from "styled-components";
import { getCarList, getUsers } from "../state/actions";
import UserCard from "../components/UserCard";
import { Form } from "antd";
import Button from "../components/Button/Button";

const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
`;

const AppTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 45px;
  background: lightblue;
`;

const FormContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  align-items: end;
  width: 70%;
`;

const Home = (props) => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.carList);
  const users = useSelector((state) => state.users.usersList);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCarList());
  }, []);

  const handleChange = () => {};

  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <Form layout="vertical">
        <FormContainer>
          <Form.Item label="Enter Car Make" name="make">
            <Select
              options={carList}
              onChange={handleChange}
              placeholder="Select a Car make"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </Form.Item>
          <Form.Item label="Enter Car Make" name="make">
            <Select options={carList} onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button label="Submit" />
          </Form.Item>
        </FormContainer>
      </Form>

      <Card />
    </Container>
  );
};

export default Home;
