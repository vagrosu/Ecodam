import './App.css';
import SmoothScroll from "smooth-scroll";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {Program} from "./components/program"
import {Speakers} from './components/speakers';
import {Team} from "./components/team";
import data from "./data/speakers.json"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
      <Header title={"Evolutionary Computing in Optimization and Data Mining"} paragraph={"JUNE 6 - 8, 2023 Alexandru Ioan Cuza University of Iasi, Romania"}/>
      <Speakers data={data}/>
      <Program/>
      <Team/>
    </div>
  );
}

export default App;
