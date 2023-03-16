import React, {useState, useContext, useEffect} from 'react';
import getCards from '../data';

const GameContext = React.createContext();

export const GameProvider = ({children}) => {

    const [pairs, setPairs] = useState(4);
    const [alpha, setAlpha] = useState('hiragana');
    const [vowel, setVowel] = useState('a');
    const [cards, setCards] = useState([]);
    const [status, setStatus] = useState([]);
    
    const changeCards = () => {
        setCards(getCards(vowel, pairs));
    }

    useEffect(()=>{
        let newStatus = [];

        for(let i = 0 ; i<cards.length ; i++){
            newStatus.push({selected: false, matched: false});
        };
        setStatus(newStatus)
    },[cards]);

    console.log(pairs, vowel)
    
    return (
        <GameContext.Provider value={{
            pairs,
            alpha,
            vowel,
            setPairs,
            setAlpha,
            setVowel,
            changeCards,
            cards,
            status,
            setStatus
        }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GameContext);
}


