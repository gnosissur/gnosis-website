import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { Link, Element } from 'react-scroll';

const Header = ({ title, children, classes }) => (
    <div>
        <Link to="__below-header" smooth={true}>
            <Element name="Header">
                <header className={classes.header}>
                    <h1>{title}</h1>
                    <span>{children}</span>
                </header>
            </Element>
        </Link>
        <Element key="reference" name="__below-header" />
    </div>
)

const styles = csjs`
    .header {
        margin: 0;
        width: 100%;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0 10%;
        cursor: pointer;
        & span { font-style: italic; }
        & > h1 {
            color: black;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: contain;
            background-position: center;
            background-image: url(/assets/bg.jpg);
        }
    }
`;

export default withStyles(styles)(Header);
