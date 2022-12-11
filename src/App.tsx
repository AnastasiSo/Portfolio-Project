import "../src/_styles/index.scss";
import Menu from "./components/Menu";
const App = () => {
  return (
    <div>
      <Menu />
      {/* Test code */}
      <img src={require("@public/assets/car.jpg").default} />
    </div>
  );
};

{
  /* <Menu />
      <Hero>
        <SocialMedia />
      </Hero>
      <Projects>
        <Slaiders>
          <Slider />
        </Slaiders>
      </Projects> 
      <Projects>     
        <Rest />
      </Projects>
      <Contacts />
      <Footer /> */
}
export default App;
