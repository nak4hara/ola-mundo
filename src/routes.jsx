import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Menu from './components/Menu'

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
          <Route path='*' element={<div>Page not found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
