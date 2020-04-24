import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Moderateur from './Components/Moderateur/Moderateur'
import Redacteur from './Components/Redacteur/Redacteur'

function App() {
  return (
    <div className="App">
      <Redacteur/>
    </div>
  );
}

export default App;
