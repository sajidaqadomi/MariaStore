import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../actions/products';

export const TargetContext = createContext();

const TargetContextProvider = (props) => {
    const [target, setTarget] = useState("women");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (target) {
            navigate(`/home/${target}`);
            dispatch(getProducts(target));
        }
    }, [target, dispatch]);



    return (
        <TargetContext.Provider value={{ target, setTarget }}>
            {props.children}
        </TargetContext.Provider>
    );
}

export default TargetContextProvider;