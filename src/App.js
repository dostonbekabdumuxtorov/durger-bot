import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './Detail/Detail'
import Home from './pages/Home/Home'

const App = () => {

  
  
  return (
    <React.Fragment>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
          </Routes>
       </BrowserRouter>
    </React.Fragment>
  )
}

export default App