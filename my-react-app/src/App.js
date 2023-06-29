import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navBar';
import Home from './home';


const App = () => {
    return (          
<div>
  <NavBar />
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
      </Router>
</div>
    );
}
 
export default App;