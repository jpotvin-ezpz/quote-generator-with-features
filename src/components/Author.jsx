import React from 'react';

const Author = ({author, genre, handleAuthorsQuotes}) => {
  return ( 
    <div 
      onClick={() => handleAuthorsQuotes()}
      className='aut-gen--wrapper'
    >
      <div>
        <h2 className='author'>{author}</h2>
        <h3 className='genre'>{genre}</h3>
      </div>
      <span class="material-icons right-arrow">
        east
      </span>
    </div>
   );
}
 
export default Author;