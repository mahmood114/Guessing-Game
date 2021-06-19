import styled from "styled-components";

export const InputField = styled.input`
    width: 320px;
    height: 2em;
    font-size: 1.5em;
    
    display: block;
    margin: 20px auto;
    text-align: center;
`;

export const CheckButton = styled.button`
    display: block;
    margin: 0 auto;
    
    font-size: 2em;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: white;
    padding-left: 10px;
    padding-right: 10px;

    :active{
        background-color: green;
    }

    :disabled {
        opacity: 50%;
    }
`;

export const ErrorMessage = styled.p`
    text-align: center;
    color: red;
`;

