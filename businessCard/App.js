import React from 'react'
import DisplayPhoto from './Components/DisplayPhoto'
import NameDesignation from './Components/NameDesignation'
import Contact from './Components/Contact'
import About from './Components/About'
import Interests from './Components/Interests'
import Social from './Components/Social'

const App = ()=>{
    return <main className="main-section">
    <DisplayPhoto/>
    <NameDesignation/>
    <Contact/>
    <About/>
    <Interests/>
    <Social/>
    </main>
}
export default App