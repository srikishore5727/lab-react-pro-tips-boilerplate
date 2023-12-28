import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import RegistrationForm from './component/RegistrationForm'

function App() {

  return (
    <>
      <nav>
        <h1><Link to={"/home"}>Kalvium &#10084;&#65039;</Link></h1>
        <div id='container'>
          <h3><Link to={"/contact"} className='opt' style={{fontSize:'20px'}}>Contacts</Link></h3>
          <h3><Link to={"/form"} className='opt' style={{fontSize:'20px'}}>Registration Form</Link></h3>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/form" element={<RegistrationForm />}/>
      </Routes>
    </>
  )
}

export default App;