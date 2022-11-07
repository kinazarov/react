import Counter from './Counter'
import MyButton from '../components/UI/MyButton/MyButton'

function Post(props) {
    return (
        <div className="post">
            <p className='post__content'>
                <strong>{`${props.number}. ${props.post.title}`}</strong><br/>
                {props.post.content}
            </p>
            <div className='postButtons'>
                <Counter/>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
}


export default Post;
