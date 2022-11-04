import React from 'react'
import Post from './Post';

function PostList({posts, title}) {
    return (
        <div className="postList">
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((item, index) => <Post number={index+1} post={item} key={item.id}/>)}
        </div>
    );
}


export default PostList;
