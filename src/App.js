import { useContext, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  NotFound
} from "./pages";
import { Footer, Header, NewsLetter, ScrollToTop } from "./components";
import useStyles from "./styles";
import { getCartByUserId } from "./actions/cart";
import { TargetContext } from "./contexts/TargetContext";
import { DATA_ERROR_RESET } from "./utility/actionTypes";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation()
  const { user } = useSelector((state) => state.auth);
  const { target } = useContext(TargetContext);

  useEffect(() => {
    if (user) {
      dispatch(getCartByUserId(user.id));
    }
  }, [dispatch, user]);


  useEffect(() => {
    if (location) dispatch({ type: DATA_ERROR_RESET });
  }, [location])

  return (
    <div className="App">
      <CssBaseline />
      <ScrollToTop />
      <div className={classes.nav}>
        <Header />
      </div>
      <Routes>
        <Route exact path="/home/:target" element={<Home />} />
        <Route exact path="/" element={<Navigate to={`/home/${target}`} />} />
        {["/products/:target/:cat", "/products/search", "/wishlists"].map((path, index) =>
          <Route path={path} element={<ProductsList />} key={index} />
        )}
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
        <Route element={<NotFound />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
