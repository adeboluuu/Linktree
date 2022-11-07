import { Routes, Route } from 'react-router-dom'
import './assets/styles.css'
import Home from './components/home'
import Contact from '../src/components/contact'

function App() {
  return (
    <> 
      <Routes>
      <Route path ='/contact' element={ <Contact/>}/>
      <Route path ='/' element={ <Home/> }/>
      </Routes>
    </>
  )
}

export default App
