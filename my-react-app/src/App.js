import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navBar';
import Home from './home';
import Skiing from './Skiing';
import Hockey from './Hockey'
import Skating from './Skating'
import Snowboarding from './Snowboard'

const App = () => {
    return (          
<div>
  <NavBar />
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/skiing" element={<Skiing/>}></Route>
            <Route path="/hockey" element={<Hockey/>}></Route>
            <Route path="/skating" element={<Skating/>}></Route>
            <Route path="/Snowboarding" element={<Snowboarding/>}></Route>
          </Routes>
      </Router>
</div>
    );
}
 
export default App;