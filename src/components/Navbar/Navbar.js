import {
    AppBar,
    Badge,
    InputBase,

    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from 'react-router-dom'

import useStyles from "./styles";

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar className={classes.toolbar}>
                <div className={classes.leftSide}>
                    <Select value={"en"} onChange={""} className={classes.select}>
                        <MenuItem value={"en"}>En</MenuItem>
                        <MenuItem value={"ar"}>Arabic</MenuItem>
                    </Select>
                    <div className={classes.search}>
                        <InputBase placeholder="Search" className={classes.inputSearch} />
                        <SearchOutlined className={classes.searchIcon} />
                    </div>
                </div>
                <div className={classes.centerSide}>
                    <Typography component={Link} to='/' variant="h3" className={classes.logo} >
                        Maria.
                    </Typography>
                </div>
                <div className={classes.rightSide}>
                    <Link className={classes.link} to='/register'>register</Link>
                    <Link className={classes.link} to='/login'>sign in</Link>
                    <Badge badgeContent={4} color="primary" className={classes.badge} component={Link} to='/cart'>
                        <ShoppingCartOutlined className={classes.shoppingIcon} />
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
