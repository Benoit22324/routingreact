const Ajout = () => {
    return (
        <>
            <h2>Formulaire d'ajout d'un post</h2>
            <form>
                <label>Titre:
                    <input type="text" placeholder="Veuillez saisir un titre"/>
                </label>
                <label>Contenu:
                    <textarea type="text" placeholder="Veuillez saisir votre contenu"/>
                </label>
            </form>
        </>
    )
}

export default Ajout