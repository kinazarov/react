import React from 'react'
import Post from '../../Post';

function PostList({posts, title, remove}) {
    return (
        <div className="postList">
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((item, index) => <Post remove={remove} number={index+1} post={item} key={item.id}/>)}
        </div>
    );
}


export default PostList;
