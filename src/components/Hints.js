import {useState} from "react";

const Hints = (props) => {
//  Props
    const number = props.number;

//  useState
    const [hints, setHints] = useState("");


    // let hintsArray = [number];
    // for(let i=0; i<5; i++)
    //     hintsArray.push(Math.floor(Math.random() * 100));

    // hintsArray = hintsArray.sort(() => Math.random() - 0.5) //Shuffled array
  
    // let hintsString = "";
    // hintsArray.forEach(hint => hintsString = hintsString.concat(`${hint}\t`));

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
            <button onClick={showHints}>Hint</button>
            <p>{hints}</p>
        </div>
    );
};

export default Hints;