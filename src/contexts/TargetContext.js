import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TargetContext = createContext();

const TargetContextProvider = (props) => {
    const [target, setTarget] = useState("women");
    const navigate = useNavigate();

    useEffect(() => {
        if (target) {
            navigate(`/home/${target}`);
        }
    }, [target]);

    return (
        <TargetContext.Provider value={{ target, setTarget }}>
            {props.children}
        </TargetContext.Provider>
    );
};

export default TargetContextProvider;
