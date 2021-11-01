import React, { useState } from 'react'
import './searchBar.css'
function SearchBar({ data }) {
    const [searchResults, setSearchResults] = useState()

    // Setting search data to state
    function handleChange(e) {
        setSearchResults(e.target.value)
    }

    // Calling an API request to url with search result parameters
    function handleSubmit(e) {
        e.preventDefault()

        // let key = 'c1e1adb66b8fbb7279c98171c5e8ebf8'
        let key = 'a04cf5ffd1b26ce67c29a7bf1606074c'
        let url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${searchResults}&page_size=10&page=1&s_track_rating=desc&apikey=${key
            }`

        fetch(url)
            .then(response => response.json())
            .then(lyrics => data(lyrics.message.body.track_list))
            .catch(err => console.log('err', err))

    }

    return (
        <>
            <div className='form-container'>
                <form className='lyric-form' onSubmit={handleSubmit}>
                    <input type='text' required onChange={(e) => handleChange(e)} placeholder='Search Twitter' id='search-bar' name='search' />
                    <input type='submit' value='&#x1F50D;' />
                </form>
            </div>


        </>
    )
}

export default SearchBar