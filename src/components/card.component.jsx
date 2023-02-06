

const Card = ({romaji, symbol, index, checkCard, statusOb}) => {

    const {selected, matched} = statusOb;



    const handleCover = (e) => {
        checkCard(e.target.nextSibling.textContent, index);
    };
    
    return (
        <div className='card'>
            <div className={`${matched && 'complete'}`}></div>
            <div className={`${selected ? 'cover hide':'cover '}`} onClick={handleCover}></div>
            <div className="symbol" >{symbol}</div>
            <div className="romaji">{romaji}</div>
            
            
        </div>
    )
}


export default Card;