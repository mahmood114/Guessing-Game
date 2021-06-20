// import {useState} from 'react';
import { ButtonStyled, ResultImage } from '../styles';

const Result = (props) => {

    const setUserGuess = props.setUserGuess;
    const setNumber = props.setNumber;
    const setMessage = props.setMessage;
    const setTries = props.setTries;
    const result = props.result;
    const setResult = props.setResult;
    // const [imageSource, setImageSource] = useState("https://media4.giphy.com/media/SSbQCboDHgXtokZQOc/giphy.gif");

    const restartGame = () => {
        setUserGuess(null);
        setNumber(Math.floor(Math.random() * 1000));
        setMessage("");
        setTries(8);
        setResult(null);
    }

    const showImage = () => {
        if (result === "won")
            return (<ResultImage src="https://media.tenor.com/images/104994a187ee353fe46f8caa46df2634/tenor.gif"/>)
        else return (<ResultImage src="https://media4.giphy.com/media/SSbQCboDHgXtokZQOc/giphy.gif"/>)
    }
    return (
        <div>
            <p>You have {result}</p>
            {showImage()}
            <ButtonStyled onClick={restartGame}>Play again</ButtonStyled>
        </div>
    );
};

export default Result   