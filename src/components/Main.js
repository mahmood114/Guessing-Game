import { InputField, CheckButton, ErrorMessage } from '../styles';
import {useState} from "react";

const Main = (props) => {
    
    // Props
    const userGuess = props.userGuess;
    const setUserGuess = props.setUserGuess;
    const tries = props.tries;
    const setTries = props.setTries;
    const number = props.number;
    const message = props.message;
    const setMessage = props.setMessage;
    const setResult = props.setResult;

    // States
    const [disableButton, setDisableButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [prevNum, setPrevNum] = useState();
    


// button handler
    const checkGuess = () => {
        if(userGuess === prevNum || !userGuess)
            return;

        setTries(tries => tries - 1);
        
        if (userGuess === number) {
            setResult("won");
            return;
        }
        else if (userGuess >= number) setMessage("Try smaller");
        else setMessage("Try larger");

        if (tries <= 1)
            setResult("lost");

        setPrevNum(userGuess);
    }

// Input change handler
    const changeInput = event => {
        const newVal = Number(event.target.value)
        setUserGuess(newVal);

        if (!newVal)
            return;

        if (newVal > 1000 || newVal < 1) {
            setDisableButton(true);
            setErrorMessage("Guess out of bound");
        }
            
        else {
            setDisableButton(false);
            setErrorMessage("");
        }

    }

    return (
        <div>
            <InputField onChange={changeInput} placeholder="Guess the number (1-1000)"></InputField>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <CheckButton disabled={disableButton} onClick={checkGuess}>Check</CheckButton>
            <p>{message}</p>
            <p>{tries} guesses left</p>

        </div>
    )
};

export default Main;