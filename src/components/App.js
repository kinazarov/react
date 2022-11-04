import { useState } from 'react';
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

    const emptyPost = {title: '', content: ''};

    const [post, setPost] = useState(emptyPost)
    const [posts, setPosts] = useState(testPosts)


    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            'title': post.title,
            'content': post.content
        }

        setPosts([...posts, newPost])
        setPost(emptyPost)
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, 'title': e.target.value})}
                    type='text' placeholder='Название поста'
                />
                <MyInput
                    value={post.content}
                    onChange={e => setPost({...post, 'content': e.target.value})}
                    type='text' placeholder='Содержание поста'
                />
                <MyButton onClick={addNewPost}>Запостить</MyButton>
            </form>
            <PostList posts={posts} key={1} title="Список постов 1"/>

            <MusicList/>
        </div>
    );
}


export default App;