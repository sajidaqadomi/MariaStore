import { IconButton, InputBase, Paper } from "@material-ui/core";
import { CancelRounded, Search } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsBySearch } from "../../../../actions/products";

import useStyles from './styles'

const SearchInput = ({ className = {} }) => {
    const [value, setValue] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleSearch = () => {
        if (value.trim()) {

            dispatch(getProductsBySearch(value));
            navigate(
                `/products/search?searchQuery=${value}`
            );
            setValue('')


        } else {
            navigate(`/`);
        }
    }

    return (
        <Paper square elevation={0} className={`${classes.paper} ${className}`}>

            <InputBase
                placeholder="Search"
                type="text"
                classes={{ root: classes.root, focused: classes.focused }}
                fullWidth
                size="small"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                endAdornment={(
                    <>
                        {value && (
                            <IconButton
                                size="small"
                                aria-label="toggle password visibility"
                                onClick={() => setValue("")}
                            >
                                <CancelRounded />
                            </IconButton>
                        )}
                        <IconButton size="small" onClick={handleSearch}>
                            <Search />
                        </IconButton>
                    </>
                )

                }
            />
        </Paper>
    );
};

export default SearchInput;


