import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
// import Homescreen from "./screens/Homescreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        {/* <Route exact path="/Homescreen" component={Homescreen} /> */}
      </Routes>
    </Router>
  );
}

export default App;
