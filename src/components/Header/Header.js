import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

//import { BottomNav, Navbar } from "..";
import { mainCategories } from "../../utility/mainCategories";
import { getProducts } from "../../actions/products";
import { getCategories } from "../../actions/categories";
import { Paper } from "@material-ui/core";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import { TargetContext } from "../../contexts/TargetContext";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { target } = useContext(TargetContext)
    const [mainCat, setMainCat] = useState(0);
    const [isAtHome, setIsAtHome] = useState(true);



    const handleChangeMainCat = (e, v) => {
        setMainCat((prev) => v);
    };

    useEffect(() => {
        if (location) {
            let lastPath = location.pathname.split("/").slice(-1)[0];

            if (lastPath === "women" || lastPath === "men") {
                setIsAtHome(true);
            } else {
                setIsAtHome(false);
            }
        }
    }, [location]);

    // useEffect(() => {
    //     if (target) {
    //         navigate(`/home/${target}`);
    //         dispatch(getProducts(target));
    //     }
    // }, [target, dispatch]);

    useEffect(() => {
        if (target && mainCategories[mainCat]) {
            dispatch(
                getCategories({ cat: mainCategories[mainCat], targetGender: target })
            );
        }
    }, [target, mainCat, dispatch]);

    return (
        <Paper square>
            <Navbar />
            {isAtHome && (
                <BottomNav
                    value={mainCat}
                    handleChange={handleChangeMainCat}
                    data={mainCategories}
                />
            )}
        </Paper>
    );
};

export default Header;
