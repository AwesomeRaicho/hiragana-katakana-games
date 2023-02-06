import {useState, useEffect} from 'react'

import { useGlobalContext } from "./gameContext.component";
import Card from "./card.component";



const CardBoard = () => {

    const {cards, alpha, status, setStatus} = useGlobalContext();
    
    const [compare, setCompare] = useState([]);

    const checkCard = (value, index) => {
        const newCompare = [...compare, {value: value, index: index}];
        let newStatus = status.map((v,i)=>{
            if(i === index){
                return {selected: true, matched: false}
            } else {
                return v;
            }
        })
        setStatus(newStatus);
        setCompare(newCompare)
    };

    useEffect(()=>{
        if(compare.length >= 2){

            if(compare[0].value === compare[1].value){

                let newStatus = status.map((v,i)=>{
                    if((i === compare[0].index) || (i === compare[1].index)){
                        return {selected: true, matched: true};
                    } else {
                        return v;
                    }
                })
                    setStatus(newStatus);
                    setCompare([]);

            }else {
                let newStatus = status.map((v,i)=>{
                    if((i === compare[0].index) || (i === compare[1].index)){
                        return {selected: false, matched: false};
                    } else {
                        return v;
                    }
                })
                setTimeout(()=>{
                    setStatus(newStatus);
                    setCompare([]);
                },1500)

            }

        }
    },[compare]);
    return (
        <div className="cards-container">

            {cards.map((card, index)=>{
                const {romaji, hiragana, katakana} = card;


                const symbol = () =>{
                    if(alpha === 'hiragana'){
                        return hiragana;
                    } else {
                        return katakana
                    }
                }

                return (
                    <div className="card-container" key={index}>
                        <Card romaji={romaji} symbol={symbol()} index={index} checkCard={checkCard} statusOb={{...status[index]}}/>
                    </div>
                )
            })}

        </div>
    );
};

export default CardBoard;