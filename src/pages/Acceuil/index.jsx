import { usePostsContext } from "../../utils/PostsContext"
import { Link } from "react-router-dom";

const Acceuil = () => {
    const [state, dispatch] = usePostsContext();

    const del = (id) => {
        const newposts = state.posts.filter((post) => post.id !== id);
        dispatch({type: 'delpost', payload: newposts})
    }

    return (
        <>
            <h2>Les posts du jour:</h2>
            <div className="posts_list">
                {
                    state.posts.length !== 0 ? state.posts.map((post) =>
                        <span className="posts">
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <button className="delete_post" onClick={() => del(post.id)}>Supprimer</button>
                        </span>
                    )
                    :
                    <p>Aucun posts en ce moment</p>
                }
            </div>
        </>
    )
}

export default Acceuil