import React from 'react';

const MultipleQuotes = ({multipleQuotes, author}) => {
  const listOfQuotes = multipleQuotes.map(quote => {
    return (
      <li className='quote-multiple'>
        <q>{quote.quoteText}</q>
      </li>
    )
  })
  return (
  <div className='quotes-main--wrapper'>
    <div className='quotes-wrapper'>
      <h1 className='quotes-author'>{author}</h1>
      <ul className='quotes-list'>
        {listOfQuotes}
      </ul>
    </div>
  </div>
  );
}
 
export default MultipleQuotes;