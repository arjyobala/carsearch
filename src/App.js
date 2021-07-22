import Card from "./components/ContentCard";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

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

function App() {
  return (
    <Container>
      <AppTitle>Car Search</AppTitle>
      <SearchBar />
      <Card />
    </Container>
  );
}

export default App;
