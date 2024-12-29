 
 
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Project'
import Services from './pages/Servecs'

function App() {
   

  return (
   
   <div  >
    <Header/>
    <Routes>
              <Route path='/' element={<Home/>}/>
              < Route path='/about' element={<About/>} />
              < Route path='/contact' element={<Contact/>} />
              < Route path='/services' element={<Services/>} />
              < Route path='/projects' element={<Projects/>} />
               

    </Routes>
            <Footer/>

   </div>
  )
}

export default App
