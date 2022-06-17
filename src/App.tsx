import Game from "./components/Game";
import styled from "styled-components";

function App() {
  return (
    <StyleApp className="App">
      <Game />
    </StyleApp>
  );
}

export default App;
const StyleApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
