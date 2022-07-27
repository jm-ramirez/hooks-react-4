export const useString = (text) => {
    const upperCase = () => {
        return text.toUpperCase();
    };

    const lowerCase = () => {
        return text.toLowerCase();
    };

    const concat = (added) => {
        return text+added;
    };    

    return {
        upperCase,
        lowerCase,
        concat
    };
}