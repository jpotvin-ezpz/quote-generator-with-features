import React from 'react';

const Quote = ({quote, isLoading}) => {
 return (
   
  <div className='quote'>
    {isLoading ? <div>Loading...</div> 
               : <q>{quote}</q>}
  </div>
 )
}
 
export default Quote;