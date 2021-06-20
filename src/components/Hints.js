import {useState} from "react";
import { ButtonStyled } from "../styles";

const Hints = (props) => {
    
    //  Props
    const number = props.number;
    const disableHintsButton = props.disableHintsButton;
    //  useState
    const [hints, setHints] = useState("");

    const showHints = () => {
        
        if (!hints){
            
            let hintsArray = [number];
            for(let i=0; i<10; i++) // Add random numbers
                hintsArray.push(Math.floor(Math.random() * 1000));
        
            hintsArray = hintsArray.sort(() => Math.random() - 0.5) // Shuffled array
          
            let hintsString = "";
            hintsArray.forEach(hint => hintsString = hintsString.concat(`${hint} `));
            setHints(hintsString);
        }

    }
    
    return (
        <div>
            <ButtonStyled disabled={disableHintsButton} onClick={showHints}>Hint</ButtonStyled>
            <p>{hints}</p>
        </div>
    );
};

export default Hints;