import '../assets/styles.css'
import {Link } from "react-router-dom"
import Footer from '../components/footer'
import Main from '../components/main'
// import MainRouter from './mainRouter'
function Home() {


  return (
    <div className="App">
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
