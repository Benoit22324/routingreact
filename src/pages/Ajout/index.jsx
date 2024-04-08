import { usePostsContext } from "../../utils/PostsContext"

const Ajout = () => {
    const [state, dispatch] = usePostsContext();

    const updatetitle = (e) => {
        dispatch({type: 'updatetitle', payload: e.target.value})
    }
    const updatecontent = (e) => {
        dispatch({type: 'updatecontent', payload: e.target.value})
    }

    return (
        <>
            <h2>Formulaire d'ajout d'un post</h2>
            <form className="add_form">
                <label>Titre:
                    <input type="text" name="title" value={state.title} placeholder="Veuillez saisir un titre" onChange={updatetitle}/>
                </label>
                <label>Contenu:
                    <textarea type="text" name="content" value={state.content} placeholder="Veuillez saisir votre contenu" onChange={updatecontent}/>
                </label>
                <button className="form_submit" onClick={() => dispatch({type: 'addpost'})}>Ajouter</button>
            </form>
        </>
    )
}

export default Ajout