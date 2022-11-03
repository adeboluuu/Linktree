import { Routes, Route } from 'react-router-dom'
import './assets/styles.css'
import Home from './components/home'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ='/contact' element={ <Contact/>}/>
      <Route path ='/' element={ <Home/> }/>
      </Routes>
    </div>
  )
}

export default App
