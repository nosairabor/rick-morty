import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Episodes from "./Navbar/Episodes";
import Location from "./Navbar/Location";
import CardInfo from './Categories/CardInfo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<CardInfo/>}/>

          <Route path="/episode" element={<Episodes/>} />
          <Route path="/episode/:id" element={<CardInfo/>} />

          <Route path="/location" element={<Location/>} />
          <Route path="/location/:id" element={<CardInfo/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
