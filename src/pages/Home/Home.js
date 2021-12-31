import React from "react";

import {
    Categories,
    Products,
    ScrollList,
    Slider,
} from "../../components";

const Home = () => {
    return (
        <div>
            <Slider />
            <Categories />
            {/* <ScrollList /> */}
            <Products />
        </div>
    );
};

export default Home;
