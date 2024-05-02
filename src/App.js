import './App.css';
import SmoothScroll from "smooth-scroll";
import {Navigation} from "./components/navigation";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
