import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrival from "./components/Sections/NewArrivals/NewArrivals";
import Categorires from "./components/Sections/Categories/Categories";
import content from "./data/content.json";

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <NewArrival></NewArrival>

      {content.pages.shop.sections.map((section, index) => (
        <Categorires key={index} title={section.title} data={section.data} />
      ))}
      
    </div>
  );
}

export default App;
