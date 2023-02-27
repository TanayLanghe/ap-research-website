import logo from './logo.svg';
import './App.css';
import Signup1 from "./pages/signup1"
import Signup2 from "./pages/signup2"
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

            <Route path='/index' element={<Index/>} />
          </Routes>
      </Router>
  );
}

export default App;
