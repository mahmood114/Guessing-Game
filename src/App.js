import './App.css';
import Main from './components/Main';
import Result from './components/Result';
import {useState} from "react";
import {GlobalStyle} from "./styles.js";

function App() {

// States
  const [result, setResult] = useState(null);
  const [userGuess, setUserGuess] = useState();
  const [number, setNumber] = useState(Math.floor(Math.random() * 1000));
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(8);

  const changeView = () => {
    return result? 
      <Result 
        result={result} 
        setResult={setResult}
        setUserGuess = {setUserGuess}
        setNumber = {setNumber}
        setMessage = {setMessage}
        setTries = {setTries}
         /> : 
      (
        <div>
          <Main 
          setResult={setResult} 
          userGuess={userGuess} 
          setUserGuess={setUserGuess}
          number={number}
          message={message}
          setMessage={setMessage}
          tries={tries}
          setTries={setTries}
          />
          
        </div>
      )
      
  }

  return (
    <div>
      <GlobalStyle />
      <h1>THE GUESSING GAME</h1>
      {changeView()}
    </div>
  )
}

export default App;
