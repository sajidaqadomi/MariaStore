import { Avatar, Container, Link, Typography } from "@material-ui/core";
import {
    Facebook,
    Instagram,
    LocationOn,
    Mail,
    Phone,
    Pinterest,
    Twitter,
} from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Container maxWidth="xl">
                <div className={classes.footerContent}>
                    <div className={classes.about}>
                        <Typography variant="h3" className={classes.title}>
                            MARIA.
                        </Typography>
                        <Typography variant="body2" className={classes.desc}>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by
                            injected humour, or randomised words which don’t look even
                            slightly believable.
                        </Typography>
                        <div className={classes.social}>
                            <Avatar className={classes.icon}>
                                <Facebook />
                            </Avatar>
                            <Avatar className={classes.icon}>
                                <Instagram />
                            </Avatar>
                            <Avatar className={classes.icon}>
                                <Twitter />
                            </Avatar>
                            <Avatar className={classes.icon}>
                                <Pinterest />
                            </Avatar>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <Typography variant="h3" className={classes.title}>
                            Useful Links
                        </Typography>

                        <div className={classes.linksContent}>
                            <Link className={classes.link}>Cart</Link>
                            <Link className={classes.link}>Man Fashion</Link>
                            <Link className={classes.link}>Woman Fashion</Link>
                            <Link className={classes.link}>Accessories</Link>
                            <Link className={classes.link}>My Account</Link>
                            <Link className={classes.link}>Order Tracking</Link>
                            <Link className={classes.link}>Wishlist</Link>
                            <Link className={classes.link}>Wishlist</Link>
                            <Link className={classes.link}>Terms</Link>
                        </div>
                    </div>
                    <div className={classes.contact}>
                        <Typography variant="h3" className={classes.title}>
                            Contact
                        </Typography>
                        <div className={classes.contactItems}>
                            <Link className={classes.contactItem}>
                                <LocationOn className={classes.icon} /> 622 Dixie Path , South
                                Tobinchester 98336
                            </Link>
                            <Link className={classes.contactItem}>
                                <Phone className={classes.icon} /> +1 234 56 78
                            </Link>
                            <Link className={classes.contactItem}>
                                <Mail className={classes.icon} /> contact@lama.dev
                            </Link>
                            <img
                                className={classes.payment}
                                src="https://i.ibb.co/Qfvn4z6/payment.png"
                                alt="payment"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
