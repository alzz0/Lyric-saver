import Header from './components/header/Header'
import SearchList from './components/searchList/SearchList';
import SavedLyrics from './components/savedLyrics/SavedLyrics';
import SearchBar from './components/searchBar/SearchBar';
import Card from './components/card/Card'
import './App.css';
import React, { useState } from 'react'

function App() {
  const [cards, setCards] = useState()

  // Retreiving search results and setting to state
  var getData = (data) => {
    setCards(data)
  }

  return (
    <div className="App">
      <Header />
      <main className='flexbox'>

        {/* mapping through search results and setting as children to searchlist component */}
        <SearchList className='board' id='board-1'>
          <SearchBar data={getData} />
          {
            cards && cards.map(elm => {
              return (

                <Card id={elm.track.track_id} key={elm.track.track_id} className='card' draggable='true'>
                  <p>{`Title: ${elm.track.track_name}`}</p>
                  <p>{`Album: ${elm.track.track_name}`}</p>
                  <p>{`Artist name: ${elm.track.artist_name}`}</p>
                </Card>

              )
            })
          }
        </SearchList>

        <SavedLyrics className='board' id='board-2' />

      </main>
    </div>
  );
}

export default App;
