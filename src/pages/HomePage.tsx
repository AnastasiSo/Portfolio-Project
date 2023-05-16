import Contacts from "@components/Contacts";
import Hero from "@components/Hero";
import Projects from "@components/projects/Projects";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Contacts />
    </div>
  );
};

export default HomePage;
