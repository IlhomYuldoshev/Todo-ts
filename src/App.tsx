import React from 'react'
import {Navbar} from './components/Navbar'
import TodosPage from "./pages/Todos";
import AboutPage from "./pages/AboutPage";
import {Routes, Route} from "react-router-dom"


const App: React.FC = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>}/>
        <Route path="/todos" element={<TodosPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  )
}

export default App
