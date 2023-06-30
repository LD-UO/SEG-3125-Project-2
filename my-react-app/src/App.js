import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navBar';
import Home from './home';
import Skiing from './Skiing';
import Hockey from './Hockey'
import Skating from './Skating'
import Snowboarding from './Snowboard'
import Footer from './Footer';
import CheckOut from './CheckOut';
import Payment from './payment';

const App = () => {
    return (
            <div>
                <NavBar />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/skiing" element={<Skiing />}></Route>
                        <Route path="/hockey" element={<Hockey />}></Route>
                        <Route path="/skating" element={<Skating />}></Route>
                        <Route path="/Snowboarding" element={<Snowboarding />}></Route>
                        <Route path="/CheckOut" element={<CheckOut />}></Route>
                        <Route path="/payment" element={<Payment />}></Route>
                    </Routes>
                </Router>
                <Footer/>
            </div>
    );
}

export default App;