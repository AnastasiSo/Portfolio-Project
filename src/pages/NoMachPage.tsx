import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import CircularButton from "../components/navigation/CircularButton";

const NoMachPage = () => {
  const navigate = useNavigate();
  const handleScrollToHomePage = () => {
    navigate(-1);
  };
  return (
    <Container className="no-mach-page">
      <h1>404</h1>
      <h3>
        Oops, we can't seem to find
        <br />
        the page what are you looking for.
      </h3>
      <p>Don't worry, you can return to the previous page.</p>
      <CircularButton
        direction="left"
        handlerOnClick={handleScrollToHomePage}
      />
    </Container>
  );
};

export default NoMachPage;
