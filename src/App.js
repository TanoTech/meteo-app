import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeteoNav from './components/MeteoNav';
import MeteoApp from './components/MeteoApp';


function App() {
  const [location, setLocation] = useState('');
  
  return (
    <div className="App">
      <header>
        <MeteoNav onSearch={(newLocation) => setLocation(newLocation)} />
      </header>
      <main>
        <MeteoApp location={location} />
      </main>
    </div>
  );
}

export default App;