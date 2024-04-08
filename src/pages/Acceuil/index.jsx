import { usePostsContext } from "../../utils/PostsContext"
// import { NavLink, Routes, Route } from "react-router-dom"

const Acceuil = () => {
    const [state] = usePostsContext();

    return (
        <>
            <h2>Les posts du jour:</h2>
            {
                state.posts.length !== 0 ? state.posts.map((post) =>
                    <h2>{post.title}</h2>
                )
                :
                <p>Aucun posts en ce moment</p>
            }
        </>
    )
}

export default Acceuil