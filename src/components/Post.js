import Counter from './Counter'

function Post(props) {
    return (
        <div className="post">
            <p className='post__content'>
                <strong>{`${props.number}. ${props.post.title}`}</strong><br/>
                {props.post.content}
            </p>
            <div className='postButtons'>
                <Counter/>
                <button>Удалить</button>
            </div>
        </div>
    );
}


export default Post;
