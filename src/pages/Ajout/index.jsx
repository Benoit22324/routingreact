import { usePostsContext } from "../../utils/PostsContext"

const Ajout = () => {
    const [state, dispatch] = usePostsContext();

    const updatetitle = (e) => {
        dispatch({type: 'updatetitle', payload: e.target.value})
    }
    const updatecontent = (e) => {
        dispatch({type: 'updatecontent', payload: e.target.value})
    }
    const addpost = (e) => {
        e.preventDefault();
        if (state.title.trim() !== '' && state.content.trim() !== '') dispatch({type: 'addpost'})
        else if (state.title.trim() === '' && state.content.trim() !== '') dispatch({type: 'adderr', payload: 'Veuillez saisir un titre'})
        else if (state.title.trim() !== '' && state.content.trim() === '') dispatch({type: 'adderr', payload: 'Veuillez saisir le contenu'})
        else if (state.title.trim() === '' && state.content.trim() === '') dispatch({type: 'adderr', payload: 'Veuillez saisir un titre et son contenu'})
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
                <button className="form_submit" onClick={addpost}>Ajouter</button>
            </form>
            {
                state.errmsg !== '' && <p>{state.errmsg}</p>
            }
        </>
    )
}

export default Ajout