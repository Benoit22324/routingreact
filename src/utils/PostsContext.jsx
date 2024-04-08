import { createContext, useContext, useReducer } from "react";
import PostsReducer from "../reducer/PostsReducer";
import { init } from "../reducer/PostsReducer";

const PostsContext = createContext();

export const usePostsContext = () => {
    return useContext(PostsContext)
}

const PostsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(PostsReducer, init);

    return <PostsContext.Provider value={[state, dispatch]}>
        {children}
    </PostsContext.Provider>
}

export default PostsContextProvider