import './App.css';
import SmoothScroll from "smooth-scroll";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {Program} from "./components/program"
import {UsersPresenter} from './components/usersPresenter';
import {Team} from "./components/team";
import {speakers} from "./data/speakers.js"
import {participants} from "./data/participants.js"
import {Sponsors} from "./components/sponsors";
import {Contact} from "./components/contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
      <Header title={<><div>Doctoral Summer School on</div><div>Evolutionary Computing,</div><div>Optimization and Data Mining</div><div>17th Edition</div></>} paragraph={"JUNE 11 - 14, 2024"} />
      <UsersPresenter id={"speakers"} title={"Speakers"} data={speakers} isToBeSorted/>
      <Program />
      <UsersPresenter id={"participants"} title={"Participants"} data={participants}/>
      <Sponsors />
      <Team/>
      <Contact />
    </div>
  );
}

export default App;
