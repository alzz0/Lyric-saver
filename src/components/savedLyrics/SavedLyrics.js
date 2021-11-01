import './savedLyrics.css'
import React from 'react'
function SavedTweets(props) {
    var mappedStorage = JSON.parse(localStorage.getItem('savedLyrics'))

    // Retrieving drop data and initializing to localstorage

    const drop = e => {
        e.preventDefault();

        const cardId = e.dataTransfer.getData('cardId');
        const card = document.getElementById(cardId);
        let cardContent = card.innerText
        card.style.display = 'block';

        e.target.appendChild(card)

        let currentData = localStorage.getItem('savedLyrics');
        if (currentData == null) {
            currentData = [];
        } else {
            currentData = JSON.parse(currentData);
        }

        let data = currentData.concat(cardContent)
        let uniq = [...new Set(data)];

        localStorage.setItem('savedLyrics', JSON.stringify(uniq));


    }


    const dragOver = e => {
        e.preventDefault();

    }

    return (
        <>
            <div
                id={props.id}
                onDrop={drop}
                onDragOver={dragOver}
                className={props.className}
            >
                <h1 id='saved-tweets-header'>Saved Lyrics</h1>
                {/* mapping through localstorage and displaying data */}
                {
                    mappedStorage && mappedStorage.map((elm, idx) => {
                        return (

                            <div
                                key={idx}
                                id={`card-${idx}`}
                                onDrop={drop}
                                onDragOver={dragOver}
                                className='card'
                            >
                                {elm}
                            </div>
                        );
                    })}
            </div>
        </>)
}

export default SavedTweets