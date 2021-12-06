import {
    Box,
    Button,
    Container,
    Divider,
    Link,
    Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

import useStyles from "./styles";

const Color = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  margin: 0 5px;
`;

const Cart = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <Typography className={classes.title} variant="h3" component="h2">
                your bag
            </Typography>
            <div className={classes.top}>
                <Button variant="outlined" className={classes.btn}>
                    continue shopping
                </Button>
                <div className={classes.links}>
                    <Link className={classes.link}>shopping bage(2)</Link>
                    <Link className={classes.link}>your wishlist (0)</Link>
                </div>
                <Button variant="contained" className={classes.btn}>
                    checkout now
                </Button>
            </div>
            <div className={classes.bottom}>
                <div className={classes.productsContainer}>
                    <div className={classes.product}>
                        <div className={classes.productDetails}>
                            <div className={classes.productImg}>
                                <img
                                    className={classes.img}
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                                    alt="img not found"
                                />
                            </div>
                            <div className={classes.productInfo}>
                                <Typography className={classes.name}>
                                    <Box fontWeight="bold" component="span">
                                        Product:
                                    </Box>
                                    JESSIE THUNDER SHOES
                                </Typography>
                                <Typography className={classes.name}>
                                    <Box fontWeight="bold" component="span">
                                        ID:
                                    </Box>
                                    93813718293
                                </Typography>
                                <Color color="black" />
                                <Typography className={classes.size}>
                                    <Box fontWeight="bold" component="span">
                                        Size:
                                    </Box>
                                    37.5
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.priceDetails}>
                            <div className={classes.amountContainer}>
                                <Add />
                                <Typography component="span" className={classes.amount}>
                                    2
                                </Typography>
                                <Remove />
                            </div>
                            <Typography className={classes.price}>$ 30</Typography>
                        </div>
                    </div>
                    <Divider />
                    <div className={classes.product}>
                        <div className={classes.productDetails}>
                            <div className={classes.productImg}>
                                <img
                                    className={classes.img}
                                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                                    alt="img not found"
                                />
                            </div>
                            <div className={classes.productInfo}>
                                <Typography className={classes.name}>
                                    <Box fontWeight="bold" component="span">
                                        Product:
                                    </Box>
                                    JESSIE THUNDER SHOES
                                </Typography>
                                <Typography className={classes.name}>
                                    <Box fontWeight="bold" component="span">
                                        ID:
                                    </Box>
                                    93813718293
                                </Typography>
                                <Color color="black" />
                                <Typography className={classes.size}>
                                    <Box fontWeight="bold" component="span">
                                        Size:
                                    </Box>
                                    37.5
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.priceDetails}>
                            <div className={classes.amountContainer}>
                                <Add />
                                <Typography component="span" className={classes.amount}>
                                    2
                                </Typography>
                                <Remove />
                            </div>
                            <Typography className={classes.price}>$ 30</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.summary}>
                    <Typography variant="h3" className={classes.summaryTitle}>
                        ORDER SUMMARY
                    </Typography>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            Subtotal
                        </Typography>
                        <Typography variant="body2" component="span">
                            $80
                        </Typography>
                    </div>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            {" "}
                            Estimated Shipping
                        </Typography>
                        <Typography variant="body2" component="span">
                            $ 5.90
                        </Typography>
                    </div>
                    <div className={classes.summaryItem}>
                        <Typography variant="body2" component="span">
                            Shipping Discount
                        </Typography>
                        <Typography variant="body2" component="span">
                            $ 5.90
                        </Typography>
                    </div>
                    <div className={`${classes.summaryItem} `}>
                        <Typography
                            className={classes.total}
                            variant="body2"
                            component="span"
                        >
                            Total
                        </Typography>
                        <Typography
                            className={classes.total}
                            variant="body2"
                            component="span"
                        >
                            $ 80
                        </Typography>
                    </div>
                    <Button variant="contained" className={classes.btn} fullWidth>
                        CHECKOUT NOW
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
