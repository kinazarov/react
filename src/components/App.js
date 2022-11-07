import { useState } from 'react';
import MusicList from './MusicList'
import PostList from '../components/UI/PostList/PostList'
import PostForm from '../components/UI/PostForm/PostForm';

function App() {
    const testPosts = [
        {id: 1, title: 'JS', content:'it is a proglang'},
        {id: 2, title: 'Python', content:'it is a proglang too'},
        {id: 3, title: 'CSS', content:'it is not a proglang'}
    ];

    const [posts, setPosts] = useState(testPosts)


    const addNewPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={addNewPost}/>
            <PostList remove={removePost} posts={posts} key={1} title="Список постов 1"/>
            <MusicList/>
        </div>
    );
}


export default App;