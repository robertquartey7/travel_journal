import "./App.css";
import TravelCard from "./Component/TravelCard";
import world from "./assets/world.svg";
import { travelList } from "./Component/TravelList";
function App() {
  return (
    <div className="App">
      <div>
        <div className="header__div">
          <img src={world} alt="" />
          <h3>My Traveling Jornal</h3>
        </div>
        <div className="travel__journal">
          {travelList.map((element) => {
            return (
              <TravelCard
                locatiion={element.location}
                title={element.title}
                mapLink={element.mapLink}
                date={element.date}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
