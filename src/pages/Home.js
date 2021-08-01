import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/ContentCard";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { getCarList, getUsers } from "../state/actions";
import UserCard from "../components/UserCard";
const Container = styled.div`
  width: 90vw;
  margin: auto;
  padding: 20px;
  background: #d8dbfc;
`;

const AppTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 45px;
`;

const Home = (props) => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.carList);
  const users = useSelector((state) => state.users.usersList);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCarList());
  }, []);

  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <SearchBar makes={carList} />
      {/* <UserCard users={users} /> */}
      <Card />
    </Container>
  );
};

export default Home;
