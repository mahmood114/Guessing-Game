import { MainPage, InputField, ErrorMessage, CheckButton } from '../styles';
import {useState} from "react";
import Hints from './Hints';

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
    const [disableCheckButton, setDisableCheckButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [prevNum, setPrevNum] = useState();
    const [disableHintsButton, setDisableHintsButton] = useState(true);


// button handler
    const checkGuess = () => {
        if(userGuess === prevNum || !userGuess)
            return;

        setTries(tries => tries - 1);
        if (tries === 4)
            setDisableHintsButton(false);

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
            setDisableCheckButton(true);
            setErrorMessage("Guess out of bound");
        }
            
        else {
            setDisableCheckButton(false);
            setErrorMessage("");
        }

    }

    return (
        <MainPage>
            <InputField onChange={changeInput} placeholder="Guess the number (1-1000)"></InputField>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <CheckButton disabled={disableCheckButton} onClick={checkGuess}>Check</CheckButton>
            <p>{message}</p>
            <p>{tries} guesses left</p>
            <Hints number={number} disableHintsButton={disableHintsButton}/>
        </MainPage>
    )
};

export default Main;