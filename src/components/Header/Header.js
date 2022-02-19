import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { BottomNav, Navbar } from "..";
import { mainCategories } from "../../utility/mainCategories";
import { getProducts } from "../../actions/products";
import { getCategories } from "../../actions/categories";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [target, setTarget] = useState("women");
    const [mainCat, setMainCat] = useState(0);
    const [isAtHome, setIsAtHome] = useState(true);

    const hanleChangeTarget = (e) => {
        let target = e.target.value;
        setTarget((c) => target);
    };

    const handleChangeMainCat = (e, v) => {
        setMainCat((prev) => v);
    };

    useEffect(() => {
        if (location) {
            let lastPath = location.pathname.split("/").slice(-1)[0];
            console.log(lastPath, "path");

            if (lastPath === "women" || lastPath === "men") {
                setIsAtHome(true);
            } else {
                setIsAtHome(false);
            }
        }
    }, [location]);

    useEffect(() => {
        if (target) {
            // console.log('target', target, mainCategories[mainCat])
            navigate(`/home/${target}`);
            dispatch(getProducts(target));
        }
    }, [target]);

    useEffect(() => {
        if (target && mainCategories[mainCat]) {
            // console.log("target", target, mainCategories[mainCat]);
            dispatch(
                getCategories({ cat: mainCategories[mainCat], targetGender: target })
            );
        }
    }, [target, mainCat]);
    return (
        <>
            <Navbar hanleChangeTarget={hanleChangeTarget} target={target} />
            {isAtHome && (
                <BottomNav
                    value={mainCat}
                    handleChange={handleChangeMainCat}
                    data={mainCategories}
                />
            )}
        </>
    );
};

export default Header;
