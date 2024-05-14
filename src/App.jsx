import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthLayout, BaseLayout } from './components'

import { Home, SignIn } from './pages'
import { GlobalStyles } from './styles/global/globalStyles'

function App() {

  return (
    <>
    <Router>
      <GlobalStyles />
      <Routes>
        {/* main screens */}
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />}/>
        </Route>

        {/* auth screen */}
        <Route path='/' element={<AuthLayout />}>
          <Route path='sign_in' element={<SignIn />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
