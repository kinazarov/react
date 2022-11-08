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
            <div>
                <hr style={{margin: '15px 0'}}/>
                <select>
                    <option value="byTitle">По названию</option>
                    <option value="byContent">По описанию</option>
                </select>
            </div>

            {
                posts.length === 0 ?
                 <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
                : <PostList remove={removePost} posts={posts} key={1} title="Список постов 1"/>
            }
            <MusicList/>
        </div>
    );
}


export default App;