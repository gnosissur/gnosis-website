import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { Link } from 'react-scroll';

const NavLink = ({ name, to, classes }) => (
    <Link activeClass={classes.active.className} to={to} smooth={true} spy={true}>
        { name || to }
    </Link>
)

var styles = csjs`
    .active {
        background-color: #dfdfdf;
        color: white;
    }
`;

export default withStyles(styles)(NavLink);
