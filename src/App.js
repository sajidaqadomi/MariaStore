import { useContext, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Home,
  ProductsList,
  Product,
  Register,
  Login,
  Cart,
  Success,
  EmptyPage,
} from "./pages";
import { Footer, Header, NewsLetter, ScrollToTop } from "./components";
import useStyles from "./styles";
import { getCartByUserId } from "./actions/cart";
import { TargetContext } from "./contexts/TargetContext";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { target } = useContext(TargetContext);

  useEffect(() => {
    if (user) {
      dispatch(getCartByUserId(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">


      {/* <div className={classes.offset} /> */}


      <CssBaseline />
      <ScrollToTop />
      <div className={classes.nav}>
        {/* <Announcement /> */}
        <Header />
        {/* <Breadcrumb /> */}
      </div>
      <Routes>
        <Route exact path="/home/:target" element={<Home />} />
        <Route exact path="/" element={<Navigate to={`/home/${target}`} />} />
        {["/products/:target/:cat", "/products/search"].map((path, index) =>
          <Route path={path} element={<ProductsList />} key={index} />
        )}
        {/* <Route

              path={["/products/:target/:cat", "/products/search"]}
              element={<ProductsList />}
            /> */}
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/no_results_page/" element={<EmptyPage />} />
        <Route
          exact
          path="/register"
          element={<Register />}
        />
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
      <NewsLetter />
      <Footer />


    </div>
  );
}

export default App;
