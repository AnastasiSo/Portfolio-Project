import "../src/_styles/index.scss";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
const App = () => {
  return (
    <div>
      <Menu />
      <Hero />
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
