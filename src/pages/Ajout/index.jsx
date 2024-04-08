const Ajout = () => {
    return (
        <>
            <h2>Formulaire d'ajout d'un post</h2>
            <form className="add_form">
                <label>Titre:
                    <input type="text" name="title" placeholder="Veuillez saisir un titre"/>
                </label>
                <label>Contenu:
                    <textarea type="text" name="content" placeholder="Veuillez saisir votre contenu"/>
                </label>
                <input type="submit" name="add" />
            </form>
        </>
    )
}

export default Ajout