import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthLayout, BaseLayout } from './components'

import { Cart, CartEmptyScreen, ChangePass, CheckMail, Checkout, ConfirmScreen, Home, OrderDetail, OrderList, PageNotFound, ProductDetails, ProductList, ResetPass, SignIn, SignUp, Verification, WishList, WishListEmpty } from './pages'
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
          <Route path='/cart' element={<Cart />}/>
          <Route path='/empty_cart' element={<CartEmptyScreen />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/my_orders' element={<OrderList />}/>
          <Route path='/order_detail' element={<OrderDetail />}/>
          <Route path='/wishlist' element={<WishList />}/>
          <Route path='/wishlist_empty' element={<WishListEmpty />}/>
          <Route path='/confirm' element={<ConfirmScreen />}/>
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
