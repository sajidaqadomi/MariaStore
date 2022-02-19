import { useEffect, useLayoutEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Home, ProductsList, Product, Register, Login, Cart, Success } from "./pages";
import { BottomNav, Breadcrumb, Footer, Header, Navbar, NewsLetter } from './components'
import useStyles from "./styles"
import { getCartByUserId } from "./actions/cart";
import { getCategories } from "./actions/categories";



const ScrollToTop = () => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)

  }, [location.pathname])
  return (
    <></>
  )
}



function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const location =

    useEffect(() => {
      if (user) {
        dispatch(getCartByUserId(user.id))
      }
    }, [dispatch, user])

  useEffect(() => {
    // dispatch(getCategories())
  }, [dispatch])



  return (
    <div className="App">
      {/* <div className={classes.offset} /> */}
      <BrowserRouter>
        <CssBaseline />
        <ScrollToTop />
        <div className={classes.nav}>
          {/* <Announcement /> */}
          {/* <Navbar /> */}
          <Header />

          {/* <Breadcrumb /> */}
        </div>
        <Routes>

          <Route exact path='/home/:target' element={<Home />} />
          <Route exact path='/' element={<Navigate to='/home/:target' />} />
          <Route exact path='/products/:target/:cat' element={<ProductsList />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/register' element={user ? <Navigate to='/' /> : <Register />} />
          <Route exact path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/success' element={<Success />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
