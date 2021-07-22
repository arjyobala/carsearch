import Card from "./components/ContentCard";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 50vw;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <SearchContainer>
        <SearchBar />
      </SearchContainer>

      <Card />
    </div>
  );
}

export default App;
