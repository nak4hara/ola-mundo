import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import PaginaPadrao from './templates/PaginaPadrao'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'

function AppRoutes() {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  {/* scroll to the top
  but make sure to make the routes file embraced by BrowserRoute in main */}

  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
        </Route>

        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Rodape />
    </>
  )
}

export default AppRoutes
