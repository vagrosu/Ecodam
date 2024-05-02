import './App.css';
import SmoothScroll from "smooth-scroll";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {Services} from "./components/services"
import { Team } from './components/team';
import data from "./data/team.json"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
      <Header title={"Evolutionary Computing in Optimization and Data Mining"} paragraph={"JUNE 6 - 8, 2023 Alexandru Ioan Cuza University of Iasi, Romania"}/>
      <Team data={data}/>
      <Services/>
    </div>
  );
}

export default App;
