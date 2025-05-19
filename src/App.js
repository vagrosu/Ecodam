import './App.css';
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Program } from "./components/program"
import { UsersPresenter } from './components/usersPresenter';
import { Team } from "./components/team";
import { speakers } from "./data/speakers.js"
import { participants } from "./data/participants.js"
import { Sponsors } from "./components/sponsors";
import { Contact } from "./components/contact";
import { Editions } from "./components/editions";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
      <Header title={<><div>Doctoral Summer School on</div>
      <div>Evolutionary Computing,</div>
      <div>Optimization and Data Mining</div
      ><div>20 years Aniversary - 18th Edition</div></>} paragraph={"JUNE 15-18, 2025"} />
      <UsersPresenter id={"speakers"} title={"Speakers"} data={speakers} isToBeSorted />
      <Program />
      <UsersPresenter id={"participants"} title={"Participants"} data={participants} isToBeSorted />
      <Sponsors />
      <Team />
      <Editions />
      <Contact />
    </div>
  );
}

export default App;
