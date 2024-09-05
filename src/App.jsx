import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthLayout, BaseLayout } from './components'

import { ChangePass, CheckMail, Home, PageNotFound, ProductDetails, ProductList, ResetPass, SignIn, SignUp, Verification } from './pages'
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
          <Route path='/product' element={<ProductList />}/>
          <Route path='/product/details' element={<ProductDetails />}/>
        </Route>

        {/* auth screen */}
        <Route path='/' element={<AuthLayout />}>
          <Route path='sign_in' element={<SignIn />}/>
          <Route path='sign_up' element={<SignUp />}/>
          <Route path='reset' element={<ResetPass />}/>
          <Route path='change_pass' element={<ChangePass />}/>
          <Route path='check_mail' element={<CheckMail />}/>
          <Route path='verify' element={<Verification />}/>
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// ✅
