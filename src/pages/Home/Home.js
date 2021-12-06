import React from "react";

import {
    Categories,
    Products,
    Slider,
} from "../../components";

const Home = () => {
    return (
        <div>
            <Slider />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;
