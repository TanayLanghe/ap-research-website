import './App.css';
import Signup1 from "./pages/signup1"
import Signup2 from "./pages/signup2"
import Signup3 from "./pages/signup3"
import Signup4 from "./pages/signup4"
import Signup5 from "./pages/signup5"
import Signup6 from "./pages/signup6"
import Signup7 from "./pages/signup7"
import Index from "./pages/index"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/signup1' element={<Signup1/>} />
            <Route path='/signup2' element={<Signup2/>} />
            <Route path='/signup3' element={<Signup3/>} />
            <Route path='/signup4' element={<Signup4/>} />
            <Route path='/signup5' element={<Signup5/>} />
            <Route path='/signup6' element={<Signup6/>} />
            <Route path='/signup7' element={<Signup7/>} />
            <Route path='/index' element={<Index/>} />
          </Routes>
      </Router>
  );
}

export default App;
