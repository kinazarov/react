import React, { useState } from 'react'

function Counter() {
    const [likes, setLikes] = useState(0);

    function increaseLikes() {
        console.log("◩◩◩◩◩◩ likes", likes);
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        console.log("▧▧▧▧▧▧ _likes ", likes);
        setLikes(likes - 1);
    }

    return (
        <div className="counter">
            <div>Лайков {likes}</div>
            <button onClick={increaseLikes}>Inc</button>
            <button onClick={decreaseLikes}>Dec</button>
        </div>
    );
}


export default Counter;