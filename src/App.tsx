import "./App.css";
import Achieved from "./components/Achieved/Achieved";
import Banner from "./components/Banner/Banner";
import Ministry from "./components/Ministry/Ministry";
import Mission from "./components/Mission/Mission";
import NavBar from "./components/NavBar/NavBar";
import Verse from "./components/Verse/Verse";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Vision />
      <Mission />
      <Ministry />
      <Verse />
      <Achieved />
    </div>
  );
}

export default App;
