import "./App.css";
import TravelCard from "./Component/TravelCard";
import world from "./assets/world.svg";

function App() {
  return (
    <div className="App">
      <div>
        <div className="header__div">
          <img src={world} alt="" />
          <h3>My Traveling Jornal</h3>
        </div>
        <div className="travel__journal">
          <TravelCard />
          <TravelCard />
          <TravelCard />
        </div>
      </div>
    </div>
  );
}

export default App;
