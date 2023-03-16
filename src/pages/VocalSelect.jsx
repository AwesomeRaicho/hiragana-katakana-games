import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../components/gameContext.component';
import {IoMdArrowRoundBack} from 'react-icons/io';

const VocalSelect = () => {

    const {setVowel} = useGlobalContext();

    const vowelHandler = (e) => {
        setVowel(e.target.textContent);
    };



  return (
    <Wrapper>
      <Link to={'/pairs-select'} className='back-link'><IoMdArrowRoundBack/></Link>
        <label htmlFor="vowel"> Vowel </label>
        <div className='btns-container'>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>a</button></Link>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>e</button></Link>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>i</button></Link>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>o</button></Link>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>u</button></Link>
            <Link to={'/play-memory-game'}><button type="button" className="btn" onClick={vowelHandler}>All</button></Link>
        </div>
    </Wrapper>
  )
}

export default VocalSelect;

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    
position: relative;

    label{
        font-size: 50px;
    }

    .btns-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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
`