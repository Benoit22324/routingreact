import { NavLink, Routes, Route } from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import Ajout from './pages/Ajout'
import Error from './pages/Error'
import Post from './pages/Post'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <NavLink className={'nav_link'} style={({isActive}) => {return isActive ? {fontWeight: 'bold', textDecoration: 'underline'} : {}}} to={'/'}>Acceuil</NavLink>
        <NavLink className={'nav_link'} style={({isActive}) => {return isActive ? {fontWeight: 'bold', textDecoration: 'underline'} : {}}} to={'/add'}>Ajouter</NavLink>
      </nav>
      <Routes>
        <Route path={'/'} element={<Acceuil/>}/>
        <Route path={'/add'} element={<Ajout/>}/>
        <Route path={'/post/:id'} element={<Post/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
