import { useGlobalContext } from './gameContext.component';
import {IoMdArrowRoundBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {TbRefreshDot} from 'react-icons/tb';
import { useEffect } from 'react';

const GameMenu = () => {

    const { setAlpha, changeCards} = useGlobalContext()


    const alphaHandler = (e) => {
        setAlpha(e.target.textContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changeCards();
    }

    useEffect(()=>{
        changeCards();
        // eslint-disable-next-line
    },[])

    return (
        
        <Wrapper>
            <div className="form-container">
                <Link to={'/vocal-select'} className='back-link'><IoMdArrowRoundBack/></Link>
                <form onSubmit={handleSubmit}>
    

                    <div className="form-controller">
                        <div className='btns-container'>
                            <button type="button" className="btn" onClick={alphaHandler}>Hira</button>
                            <button type="button" className="btn" onClick={alphaHandler}>Kata</button>
                        </div>
                    </div>
                    

                    <div className='launch-container'>
                        <button type="submit" className='refresh-btn'><TbRefreshDot /></button>
                    </div>
                    
                </form>
            </div>
        </Wrapper>
    );
};

export default GameMenu;

const Wrapper = styled.div`
    position: relative;
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
    z-index: 10;
  }

  .refresh-btn{
    font-size: 50px;
    position: absolute;
    top: 5%;
    right: 5%;
    display: flex;
    background: none;
    border: blue solid 5px;
    background-color: blue;
    color: white;
    border-radius: 100%;
    padding: 5px;
  }

  .btns-container{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .btn{
    font-size: 20px;
    margin: 10px;
    padding: 5px;
    font-weight: 700;
    color: white;
    border: blue solid 3px;
    background-color: #0000ffb4;
  }


`;
