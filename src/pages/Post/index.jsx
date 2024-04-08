import { usePostsContext } from "../../utils/PostsContext"
import { useParams } from 'react-router-dom'

const Post = () => {
    const [state] = usePostsContext();
    const {id} = useParams();
    const pos = state.posts.filter((post) => post.id === Number(id));

    return (
        <>
            <h2>{pos[0].title}</h2>
            <p>{pos[0].content}</p>
        </>
    )
}

export default Post