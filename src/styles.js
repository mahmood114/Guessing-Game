import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        
        background: #e0e5ec;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #353535;
        
        ${'' /* background-image: url(${BG}); */}

    }
`;

export const MainPage = styled.div`
    align-content: center;
    justify-content: center;
    padding-top: 11%;

`;

export const InputField = styled.input`
    width: 320px;
    height: 2em;
    font-size: 1.5em;
    
    display: block;
    margin: 20px auto;
    text-align: center;
`;

export const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

export const CheckButton = styled.button`
    
    color: #353535;
    width: 328px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #f50;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

    margin: 20px;
    outline: none;
    overflow: hidden;
    transition: all 0.3s ease;

    :disabled {
        opacity: 50%;
        cursor: auto;
    }

    :hover {
        background: #f50;
        color: #fff;
    }

    :before {
        position: absolute;
        content: '';
        display: inline-block;
        top: -180px;
        left: 0;
        width: 30px;
        height: 100%;
        background-color: #fff;
        animation: shiny-btn1 3s ease-in-out infinite;
    }

    :active{
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
            inset -4px -4px 6px 0 rgba(255,255,255,.2),
            inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
    }

    @keyframes shiny-btn1 {
        0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
        80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
        81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
        100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
    }
`;

export const ButtonStyled = styled.button`
    
    color: #353535;
    width: 130px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;

    margin: 20px;
    outline: none;
    overflow: hidden;
    transition: all 0.3s ease;

    :disabled {
        opacity: 50%;
        cursor: auto;
    }

    :hover {
        background: #000;
        color: #fff;
    }

    :before {
        position: absolute;
        content: '';
        display: inline-block;
        top: -180px;
        left: 0;
        width: 30px;
        height: 100%;
        background-color: #fff;
    }

`;

export const ResultImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    
`;