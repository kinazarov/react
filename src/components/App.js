import { useMemo, useState } from 'react';
import MusicList from './MusicList'
import PostList from '../components/UI/PostList/PostList'
import PostForm from '../components/UI/PostForm/PostForm';
import MySelect from '../components/UI/MySelect/MySelect';
import MyInput from './UI/MyInput/MyInput';

function App() {
    const testPosts = [
        {id: 1, title: 'JS', content:'1 it is a proglang'},
        {id: 2, title: 'Python', content:'2 it is a proglang too'},
        {id: 3, title: 'CSS', content:'3 it is not a proglang'}
    ];

    const [posts, setPosts] = useState(testPosts)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const addNewPost = (newPost) => {
        let appended = [...posts, newPost];
        let newPosts = sortPosts(selectedSort, appended);
        setPosts(newPosts)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sortType, newPosts) => {

        console.log("◩◩◩◩◩◩ 1111", 1111);
        setSelectedSort(sortType)
        let sortFunc = null;

        switch(sortType){
            case 'byTitle':
                sortFunc = (a, b) => a.title > b.title
                break;
            case 'byContent':
                sortFunc = (a, b) => a.content > b.content
                break
            default:
                sortFunc = () => false
        }

        if(newPosts){
            let s = newPosts.sort(sortFunc)
            return s
        } else {
            setPosts(posts.sort(sortFunc))
        }
    }

    return (
        <div className="App">
            <PostForm create={addNewPost}/>
            <MySelect
                splitter={true}
                defaultValue="Сортировка по"
                value={selectedSort}
                onChange={sortPosts}
                options={
                    [
                        {value: 'byTitle', title: 'По заголовку'},
                        {value: 'byContent', title: 'По содержимому'}
                    ]
                }
            />
            <MyInput
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

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