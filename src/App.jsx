import React, {useState, useEffect} from 'react';
import Author from './components/Author';
import Quote from './components/Quote';
import GetNew from './components/GetNew';
import MultipleQuotes from './components/MultipleQuotes';
import './styles/index.css'


const App = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [genre, setGenre] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [multipleQuotes, setMultipleQuotes] = useState(null);

  useEffect(() => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const newQuote = data.data[0];
      setQuote(newQuote.quoteText);
      setAuthor(newQuote.quoteAuthor);
      setGenre(newQuote.quoteGenre);
      setIsLoading(false);
    })
  },[]);

  const handleGetNewQuote = () => {
    setIsLoading(true);
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setMultipleQuotes(null);
      const newQuote = data.data[0];
      setQuote(newQuote.quoteText);
      setAuthor(newQuote.quoteAuthor);
      setGenre(newQuote.quoteGenre);
      setIsLoading(false);
    })
  }

  const handleAuthorsQuotes = () => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      const mulQuotes = data.data;
      setMultipleQuotes(mulQuotes);
    })
  }

  return (
    <div className='main-wrapper'>
      <GetNew handleGetNewQuote={handleGetNewQuote} />
      <div className='quote-author--wrapper'>
      <Quote quote={quote} isLoading={isLoading}/>
      <Author 
        author={author} 
        genre={genre} 
        handleAuthorsQuotes={handleAuthorsQuotes}
      />
      </div>
      {multipleQuotes && 
      <MultipleQuotes 
        multipleQuotes={multipleQuotes}
        author={author}
      />}
      <footer>created by Jacob Potvin - devChallenges.io</footer>
    </div>
   );
}
 
export default App;