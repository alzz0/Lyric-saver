import React from 'react';

function Card(props) {

    // Setting drag properties for card
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('cardId', target.id);

        // set timeout is aysnc. Since settimeout is a macro task it begins at the next event loop.
        // Giving us the ability to maintain visibility of element as we drag it
        setTimeout(() => {
            target.style.display = 'none'
        })
    }


    // prevents default propagation
    const dragOver = e => {
        e.stopPropagation()
    }
    return (
        <>
            <div
                id={props.id}
                className={props.className}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                {props.children}
            </div>
        </>
    )
}

export default Card