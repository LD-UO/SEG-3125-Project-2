import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navBar';
import Home from './home';
import Skiing from './Skiing';


const App = () => {
    return (          
<div>
  <NavBar />
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/skiing" element={<Skiing/>}></Route>
          </Routes>
      </Router>
</div>
    );
}
 
export default App;