import { BrowserRouter, Routes,  Route } from "react-router-dom";
import "./App.css";
import Combineroute from "./combineroute";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Combineroute/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
