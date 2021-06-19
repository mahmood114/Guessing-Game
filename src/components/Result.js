import React from 'react';

const Result = (props) => {

    const setUserGuess = props.setUserGuess;
    const setNumber = props.setNumber;
    const setMessage = props.setMessage;
    const setTries = props.setTries;
    const setResult = props.setResult;

    const restartGame = () => {
        setUserGuess(null);
        setNumber(Math.floor(Math.random() * 1000));
        setMessage("");
        setTries(8);
        setResult(null);
    }

    return (
        <div>
            <p>You have {props.result}</p>
            <button onClick={restartGame}>Play again</button>
        </div>
    );
};

export default Result   