// import { useState } from 'react'
import './App.css'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import  {Blog}  from './pages/Blog'
import  {Blogs}  from './pages/Blogs.tsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path='/signin' element={<Signin/>}></Route>
       <Route path='/blog/:id' element ={<Blog/>}></Route>
       <Route path='/blogs' element ={<Blogs/>}></Route>

      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
