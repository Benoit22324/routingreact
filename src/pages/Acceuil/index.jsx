import { usePostsContext } from "../../utils/PostsContext"
import { Link } from "react-router-dom";

const Acceuil = () => {
    const [state, dispatch] = usePostsContext();

    return (
        <>
            <h2>Les posts du jour:</h2>
            <div className="posts_list">
                {
                    state.posts.length !== 0 ? state.posts.map((post) =>
                        <span className="posts">
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <button className="delete_post" onClick={() => dispatch({type: 'delpost', payload: post.id})}>Supprimer</button>
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