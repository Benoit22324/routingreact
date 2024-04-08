import { NavLink, Routes, Route } from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import Ajout from './pages/Ajout'
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
      </Routes>
    </>
  )
}

export default App
