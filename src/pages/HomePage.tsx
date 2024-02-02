import Contacts from "@components/Contacts";
import Hero from "@components/Hero";
import Projects from "@components/projects/Projects";
import APIProject from "../components/projects/API Project/ApiProject";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <APIProject />
      <Contacts />
    </div>
  );
};

export default HomePage;
