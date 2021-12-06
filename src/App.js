import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, ProductsList, Product, Register, Login, Cart } from "./pages";
import { Announcement, Footer, Navbar, NewsLetter } from './components'
import useStyles from "./styles"

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      {/* <div className={classes.offset} /> */}
      <BrowserRouter>
        <CssBaseline />
        <Announcement />
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route exact path='/products' element={<ProductsList />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
