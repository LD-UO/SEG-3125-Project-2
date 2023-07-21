import './home.css';
import NavBar from './navBarFr';

function App() {
  return (
    <div className="home">
      <NavBar />
      <div className="div">
        <div className="h-1-wrapper">
          <h1 className="h-1">Snowbound Essentials</h1>
        </div>
        <p className="embrace-winter-with">
          Embrassez l’hiver avec Snowbound Essentials! Votre destination incontournable pour tous vos sports d’hiver
          besoins. Découvrez une qualité de premier ordre, un style inégalé et des prix imbattables.&nbsp;&nbsp; Préparez-vous à conquérir le
          froid dans le style avec Snowbound Essentials!
        </p>
        <div className='hours'>
          <div className="overlap-2">
            <div className="text-wrapper-4">HEURES</div>
            <div className="monday">
              Lundi-vendredi...... 9h-17h
              <br />
              Samedi.................. 9h-15h
              <br />
              Dimanche............ 11h-15h
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
