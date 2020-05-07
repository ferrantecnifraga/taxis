import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("Erik")
  const [frase, setFrase] = useState("")
  return ( 
    <div className="App">
      {/* <h1> {name} </h1> */}
      {/* <button onClick={ () => setName("Jaime")}>Culon</button> */}
      <h2> tu frase es: {frase} </h2>
      <input onChange={ (e) => setFrase(e.target.value)} /> 
      </div>
  );
}

export default App;
