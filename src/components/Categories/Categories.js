import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { ErrorMessage, Loading, ScrollList, SectionTitle } from "..";
import { useState } from "react";

const Categories = () => {
    const classes = useStyles();
    const { categories, isLoading } = useSelector((state) => state.categories);
    const { errors } = useSelector((state) => state.dataStatus);
    const [catError, setCatError] = useState(undefined);

    useEffect(() => {
        if (errors.length) {
            let catError = errors.filter((err) => err.type === 'categories')
            setCatError(...catError)
        } else {
            setCatError(undefined)
        }
    }, [errors]);

    const CategoriesList = () => (<Container maxWidth="lg">
        <div className={classes.slider}>
            <ScrollList slidesNumber={categories.length}>
                {categories.length && categories.map((item) => (
                    <CategoriesItem key={item._id} item={item} />
                ))}
            </ScrollList>
        </div>
    </Container>)

    if (isLoading) return <Loading />;
    return (
        <>
            <SectionTitle title="Shop by Category" className={classes.sectionTitle} />
            {catError ? (<ErrorMessage msg={catError.error} title={catError.errorTitle} />) : (<CategoriesList />)}

        </>
    );
};

export default Categories;
