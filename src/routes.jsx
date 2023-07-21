import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import PaginaPadrao from './templates/PaginaPadrao'

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Home />} />
            <Route path='about-me' element={<AboutMe />} />
          </Route>

          <Route path='*' element={<div>Page not found!</div>} />
        </Routes>

        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
