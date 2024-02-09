import Contacts from "@components/Contacts";
import Hero from "@components/Hero";
import Projects from "@components/projects/Projects";
import GalleryWithAPI from "@components/projects/api/GalleryWithAPI";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <GalleryWithAPI />
      <Contacts />
    </div>
  );
};

export default HomePage;
