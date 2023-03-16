import React from 'react';
import styled from 'styled-components';


import GameMenu from '../components/game-menu.component';
import CardBoard from '../components/card-board.component'; 

const PlayMemoryGame = () => {
  return (
   <Wrapper>
        <GameMenu/>
        <div className="cardboard-container">
          <CardBoard />
        </div>
   </Wrapper> 
  )
};


export default PlayMemoryGame;


const Wrapper = styled.div`

  width: 100%;
  max-width: 1000px;
  margin: auto;
  position: relative;

  .cardboard-container{
    display: flex;
    justify-content: center;
  }

`;