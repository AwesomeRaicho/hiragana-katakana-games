// import {useState} from 'react';
// import getCards from '../data';
import { useGlobalContext } from './gameContext.component';


const GameMenu = () => {

    const { pairs, alpha, vowel, setPairs, setAlpha, setVowel, changeCards} = useGlobalContext()

    const pairHandler = (e) => {
        setPairs(e.target.textContent);
    };
    const alphaHandler = (e) => {
        setAlpha(e.target.textContent);
    };
    const vowelHandler = (e) => {
        setVowel(e.target.textContent);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changeCards();
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="controller-container">

                    <div className="form-controller">
                        <label htmlFor="pairs">Pairs: </label>
                        <div className='btns-container'>
                            <button type="button" className="btn" onClick={pairHandler}>4</button>
                            <button type="button" className="btn" onClick={pairHandler}>8</button>
                            <button type="button" className="btn" onClick={pairHandler}>12</button>
                        </div>
                    </div>

                    <div className="form-controller">
                        <label htmlFor="vowel" onClick={alphaHandler}> Vowel: </label>
                        <div className='btns-container'>
                            <button type="button" className="btn" onClick={vowelHandler}>a</button>
                            <button type="button" className="btn" onClick={vowelHandler}>e</button>
                            <button type="button" className="btn" onClick={vowelHandler}>i</button>
                            <button type="button" className="btn" onClick={vowelHandler}>o</button>
                            <button type="button" className="btn" onClick={vowelHandler}>u</button>
                            <button type="button" className="btn" onClick={vowelHandler}>All</button>
                        </div>

                    </div>
                </div>

                <p>(Alphabet can be changed in game)</p>      

                <div className="form-controller">
                    <label htmlFor="Alphabete" onClick={alphaHandler}>Alphabete: </label>
                    <div className='btns-container'>
                        <button type="button" className="btn" onClick={alphaHandler}>hiragana</button>
                        <button type="button" className="btn" onClick={alphaHandler}>katakana</button>
                    </div>
                </div>
                

                <div className='launch-container'>
                    <div className="preview">
                    <p><strong>{pairs}</strong> pairs of <strong>"{vowel}"</strong>  vowels in <strong>{alpha}</strong> alphabete</p>
                    </div>
                    
                    <button type="submit">Start / Reset</button>
                </div>
                
            </form>
            {/*maybe add a button to hide the form*/ }
        </div>
    );
};

export default GameMenu;