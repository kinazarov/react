import React, { useState } from 'react'
import MusicList from './MusicList'
import PostList from './PostList'
import MyButton from './UI/MyButton/MyButton';

function App() {
    const testPosts = [
        {id: 1, title: 'JS', content:'it is a proglang'},
        {id: 2, title: 'Python', content:'it is a proglang too'},
        {id: 3, title: 'CSS', content:'it is not a proglang'}
    ];


    return (
        <div className="App">
            <form>
                <input type='text' placeholder='Название поста'></input>
                <input type='text' placeholder='Содержание поста'></input>
                <button>Запостить</button>
            </form>
            <PostList posts={testPosts} title="Список постов 1"/>
            <MyButton/>
            <MusicList/>
        </div>
    );
}


export default App;
