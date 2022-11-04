import React from 'react'
import Post from './Post';

function PostList({posts, title}) {
    return (
        <div className="postList">
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map(item => <Post post={item} key={item.id}/>)} 
        </div>
    );
}


export default PostList;
