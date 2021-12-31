import { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Home, ProductsList, Product, Register, Login, Cart, Success } from "./pages";
import { Announcement, Footer, Navbar, NewsLetter } from './components'
import useStyles from "./styles"
import { getCartByUserId } from "./actions/cart";
import { getCategories } from "./actions/categories";



function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      dispatch(getCartByUserId(user.id))
    }
  }, [dispatch, user])

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="App">
      {/* <div className={classes.offset} /> */}
      <BrowserRouter>
        <CssBaseline />
        <div className={classes.nav}>
          {/* <Announcement /> */}
          <Navbar />
        </div>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route exact path='/products/:cat' element={<ProductsList />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/register' element={user ? <Navigate to='/home' /> : <Register />} />
          <Route exact path='/login' element={user ? <Navigate to='/home' /> : <Login />} />
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
