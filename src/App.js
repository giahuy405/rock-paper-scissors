import Home from "./Home";
import "./Home.css"
function App() {
  return (
    <div className="bgGame" style={{
      backgroundImage:'url(./assets/bgGame.png)'
    }}>
      <Home/>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
