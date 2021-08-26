import logo from './logo.svg';
import './App.css';
import requests from "./requests"
import Row from './Row';
//netflix-clone-d299e.web.app
//11fa28afacabf123aba1cc78ffc5bbad

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      
    </div>
  );
}

export default App;
