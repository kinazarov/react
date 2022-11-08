import React, { useState } from 'react'

function Counter() {
    const [likes, setLikes] = useState(0);

    function increaseLikes() {
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        setLikes(likes - 1);
    }

    return (
        <div className="counter">
            <div>Лайков {likes}</div>
            <button onClick={increaseLikes}><h1>&nbsp;+&nbsp;</h1></button>
            <button onClick={decreaseLikes}><h1>&nbsp;&ndash;&nbsp;</h1></button>
        </div>
    );
}


export default Counter;