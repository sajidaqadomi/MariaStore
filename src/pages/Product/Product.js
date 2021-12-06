import React from "react";
import {
    Button,
    Container,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import styled from "styled-components";

import useStyles from "./styles";
import { Add, Remove } from "@material-ui/icons";

const FilterColor = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <div className={classes.productContent}>
                <div className={classes.imgContainer}>
                    <img
                        src="https://i.ibb.co/S6qMxwr/jean.jpg"
                        alt="productImg"
                        className={classes.img}
                    />
                </div>
                <div className={classes.productInfo}>
                    <Typography variant="h2" component="h2" className={classes.title}>
                        Denim Jumpsuit
                    </Typography>
                    <Typography variant="body1" className={classes.desc} component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Typography>
                    <Typography variant="body2" className={classes.price}>
                        $ 20
                    </Typography>
                    <div className={classes.filterContainer}>
                        <div className={classes.filter}>
                            <Typography variant="caption" className={classes.filterTitle}>
                                Color
                            </Typography>
                            <div className={classes.colors}>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </div>
                        </div>
                        <div className={classes.filter}>
                            <Typography variant="caption" className={classes.filterTitle}>
                                Size
                            </Typography>
                            <Select
                                className={classes.select}
                                value={"XS"}
                                // label="Color"
                                variant="outlined"
                                displayEmpty
                            // onChange={(e) => setColor(e.target.value)}
                            >
                                <MenuItem value={"XS"}>XS</MenuItem>
                                <MenuItem value={"S"}>S</MenuItem>
                                <MenuItem value={"MD"}>MD</MenuItem>
                                <MenuItem value={"L"}>L</MenuItem>
                                <MenuItem value={"XL"}>XL</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={classes.addContainer}>
                        <div className={classes.amountContainer}>
                            <Remove />
                            <Typography
                                className={classes.amount}
                                variant="caption"
                                component="span"
                            >
                                1
                            </Typography>
                            <Add />
                        </div>
                        <Button variant="outlined" className={classes.btn}>
                            add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Product;
