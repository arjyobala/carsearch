import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../components/ContentCard";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { getUsers } from "../state/actions";
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

const url = "https://vpic.nhtsa.dot.gov/api/";

const Home = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [makes, setMakes] = useState();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <SearchBar makes={data} />
      <Card />
    </Container>
  );
};

export default Home;
