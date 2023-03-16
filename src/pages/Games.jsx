import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <Wrapper>
            <div className='games-container'>
                <Link to={'/pairs-select'} className='link'>Hiragana & Katakana Memory Cards</Link>   
            </div>
    </Wrapper>
  )
}


export default Games;

const Wrapper = styled.div`

display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
align-items: center ;
max-width: 1000px;
margin: auto;

.games-container{
  border: solid blue 4px;
  text-align: center;
  margin: 10px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px gray;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;
}

.games-container:hover{
  transform: scale(1.1);
}

.link{
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: black;
  padding: 10px;
  margin: auto;
}

`;