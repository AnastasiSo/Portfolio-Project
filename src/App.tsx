import "../src/_styles/index.scss";
import Column from "./components/layout/Column";
import Container from "./components/layout/Container";
import Row from "./components/layout/Row";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </Row>
      </Container>
    </div>
  );
};

export default App;
