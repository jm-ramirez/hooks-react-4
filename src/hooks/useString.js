import { useState } from "react";

export const useString = (text) => {
    const [myText, setMyText] = useState(text);

    const upperCase = () => {
        setMyText(text.toUpperCase());
    };

    const lowerCase = () => {
        setMyText(text.toLowerCase());
    };

    const concat = (added) => {
        setMyText(text+added);
    };    

    return {
        state: myText,
        upperCase,
        lowerCase,
        concat
    };
}