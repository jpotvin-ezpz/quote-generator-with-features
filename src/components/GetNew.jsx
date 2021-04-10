import React from 'react';

const GetNew = ({handleGetNewQuote}) => {
  
    return (
    <button 
      onClick={() => handleGetNewQuote()}
      className='random-quote'
      type='button'
    >
      random
      <span className="material-icons">
        loop
      </span>
    </button> 
    )
}
 
export default GetNew;