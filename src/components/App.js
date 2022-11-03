import { useRef, useState } from 'react';
import MusicList from './MusicList'
import PostList from './PostList'
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';

function App() {
    const testPosts = [
        {id: 1, title: 'JS', content:'it is a proglang'},
        {id: 2, title: 'Python', content:'it is a proglang too'},
        {id: 3, title: 'CSS', content:'it is not a proglang'}
    ];

    const bodyInputRef = useRef();
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    


    const addNewPost = (e) => {
        console.log("◩◩◩◩◩◩ e", e);
        e.preventDefault();
        console.log("◩◩◩◩◩◩ postTitle, postContent, bodyInputRef.current.value", postTitle, postContent, bodyInputRef.current.value);
    }

    return (
        <div className="App">
            <form>
                <MyInput value={postTitle} onChange={e => {setPostTitle(e.target.value); console.log("◩◩◩◩◩◩ postTitle", postTitle);}} type='text' placeholder='Название поста'></MyInput>

                <input ref={bodyInputRef} type="text"></input>

                {/* <MyInput value={postContent} onChange={e => {setPostContent(e.target.value); console.log("◩◩◩◩◩◩ postContent", postContent);}} type='text' placeholder='Содержание поста'></MyInput> */}
                <MyButton onClick={addNewPost}>Запостить</MyButton>
            </form>
            <PostList posts={testPosts} title="Список постов 1"/>

            <MusicList/>
        </div>
    );
}


export default App;
