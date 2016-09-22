import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Nav = ({ children, classes }) => {
    let count = 0;
    return (
        <nav className={classes.nav}>
            <ul>
                {children.map(item => <li key={count++}>{item}</li>)}
            </ul>
        </nav>
    )
}

var styles = csjs`
    .nav {
        position: fixed;
        margin: 2em;
        z-index: 1;
        right: 0;
        font-family: 'Gotham-Medium', sans-serifc;
        text-transform: uppercase;
        font-size: 0.9rem;
        line-height: 0.9rem;
        & ul {
            padding: 1em;
            margin: 0;
            list-style: none;
        }
        & li {
            text-align: right;
            cursor: pointer;
            color: #dfdfdf;
            margin-bottom: 0.25em;
            & a:hover  {
                background-color: #dfdfdf;
                color: white;
            }
        }
    }
`;

export default withStyles(styles)(Nav);
