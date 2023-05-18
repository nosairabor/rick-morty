import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Episodes from "./Navbar/Episodes";
import Location from "./Navbar/Location";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/episodes" element={<Episodes/>} />
          <Route path="/location" element={<Location/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
