import {useState, useEffect} from 'react'

import { useGlobalContext } from "./gameContext.component";
import Card from "./card.component";
import styled from 'styled-components';



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
    },[compare, status, setStatus]);
    
    return (
        <Wrapper>    
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
        </Wrapper>
    );
};

export default CardBoard;

const Wrapper = styled.div`


.cards-container{
    display: flex;
    justify-content: center;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
  padding: 5px;
  margin: auto;
  
}


.card-container{
    border: solid rgba(0, 0, 255, 0) 1px;
    padding: 10px;
    width: 75px
}

.card{
  border: black 1px solid;
  border-radius: 10px;
  box-shadow: 4px 4px 8px gray;
  position: relative;
  height: 75px;
  background-color: azure;
}

.cover{
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 3;
  background-color: rgb(255, 95, 95);
}

.hide{
  z-index: -2;
}

.complete{
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 4;
  background-color: rgba(2, 221, 2, 0.212);
}

.symbol{
  width: 100%;
  height: 100%;
  font-size: 35px;
  font-weight: 600;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 10px;
}
.romaji{
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
}


`;