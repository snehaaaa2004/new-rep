import React from 'react'
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
 import Header from './components/Header'
 import Home from "./components/Home"
 import Link from './components/Link'
 
 const App = () => {
   return (
     <>
       <Router>
        <div className='App'>
          <Header/>
          
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/link' element = {<Link/>}/>
            
          </Routes>

        </div>
       </Router>

       
     </>
   )
 }
 
 export default App
 