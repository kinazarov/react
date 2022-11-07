import React from 'react'
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import { useState } from 'react';

function PostForm({create}) {
    const emptyPost = {title: '', content: ''};
    const [post, setFormState] = useState(emptyPost)

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            'title': post.title,
            'content': post.content
        }
        create(newPost)
        setFormState(emptyPost)

    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setFormState({...post, 'title': e.target.value})}
                type='text' placeholder='Название поста'
            />
            <MyInput
                value={post.content}
                onChange={e => setFormState({...post, 'content': e.target.value})}
                type='text' placeholder='Содержание поста'
            />
            <MyButton onClick={addNewPost}>Запостить</MyButton>
        </form>
    );
}


export default PostForm;