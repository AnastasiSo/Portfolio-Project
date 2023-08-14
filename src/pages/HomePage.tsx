import Contacts from "@components/Contacts";
import Hero from "@components/Hero";
import Projects from "@components/projects/Projects";
import RestAPI from "../components/projects/RestAPIProject";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <RestAPI />
      <Contacts />
    </div>
  );
};

export default HomePage;
