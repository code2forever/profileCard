import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import data from "./data"

const App=()=>{
 return (<div>
 <Navbar/>
 <main className="card-list">
 {data.map((item)=> <Card key={item.id} {...item}/>)}
 </main>
 <Footer/>
 </div>)
}

export default App;