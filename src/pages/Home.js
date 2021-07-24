import React, { useEffect, useState } from "react";
import Card from "../components/ContentCard";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import axios from "axios";

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
  const [data, setData] = useState();
  const [makes, setMakes] = useState();

  const getAllTypes = () => {
    axios
      .get(`${url}vehicles/GetAllMakes?format=json`)
      .then((res) => setData(res.data.Results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <SearchBar makes={data} />
      <Card />
    </Container>
  );
};

export default Home;
