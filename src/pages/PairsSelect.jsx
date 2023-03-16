import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {IoMdArrowRoundBack} from 'react-icons/io';
import { useGlobalContext } from '../components/gameContext.component';

const PairsSelect = () => {

  const {setPairs} = useGlobalContext();

  const pairHandler = (e) => {
    setPairs(e.target.textContent);
    console.log(e.target.textContent);
  };

  return (
    <Wrapper>
      
      <Link to={'/'} className='back-link'><IoMdArrowRoundBack/></Link>
        <label htmlFor="pairs" >Pairs </label>
        <div className='btns-container'>
            <Link to={'/vocal-select'}><button type="button" className="btn" onClick={pairHandler}>4</button></Link>
            <Link to={'/vocal-select'}><button type="button" className="btn" onClick={pairHandler}>8</button></Link>
            <Link to={'/vocal-select'}><button type="button" className="btn" onClick={pairHandler}>12</button></Link>
        </div>
    </Wrapper>
  )
}

export default PairsSelect;

const Wrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
position: relative;
margin: 0%;
padding: 0%;
width: 100%;
max-width: 1000px;
margin: auto;

.back-link{
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 50px ;
  text-decoration: none;
  color: white;
  border: blue solid 5px;
  display: flex;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 2px 2px 4px gray;
  background-color: blue;
}

label{
  font-size: 50px;
}

.btns-container{
  display: flex;
}

.btn{
  font-family: 'Anton', sans-serif;
  font-family: 'Quicksand', sans-serif;
  font-size: 70px;
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 30%;
}

`