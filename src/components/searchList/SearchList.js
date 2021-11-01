import React from 'react'
import './searchList.css'

function SearchList(props) {

    const drop = e => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const card = document.getElementById(cardId);
        card.style.display = 'block';
        e.target.appendChild(card)
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

                <div className='search-list-container'>
                    {props.children}
                </div>
            </div>
            <div id='drag-info'>
                <p>Drag lyrics <br />&#8594; <br /> to save </p>
            </div>
        </>
    )
}

export default SearchList