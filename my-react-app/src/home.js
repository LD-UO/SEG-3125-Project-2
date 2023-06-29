import './home.css';
import Navbar from './navBar';

function App() {
  return (
    <div className="home">
      <div className="div">
        <div className="h-1-wrapper">
          <h1 className="h-1">Snowbound Essentials</h1>
        </div>
        <div className="overlap-wrapper">
          <div className="frame-wrapper">
            <div className="frame">
              <div className="text-wrapper-3">Location, Ottawa. ON</div>
              <div className="text-wrapper-3">555-555-5555</div>
              <div className="text-wrapper-3">email@email.com</div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">HOURS</div>
          <div className="monday">
            Monday............9am-5pm
            <br />
            Tuesday...........9am-5pm
            <br />
            Wednesday......9am-5pm
            <br />
            Thursday..........9am-5pm
            <br />
            Friday...............9am-3pm
            <br />
            Saturday..........9am-5pm
            <br />
            Sunday............11am-3pm
          </div>
        </div>
        <p className="embrace-winter-with">
          Embrace winter with Snowbound Essentials! Your go-to destination for all your winter sports
          needs.&nbsp;&nbsp;Discover top-notch quality, unmatched style, and unbeatable prices. Get ready to conquer the
          cold in style with Snowbound Essentials!
        </p>
      </div>
    </div>
  )
}

export default App;
