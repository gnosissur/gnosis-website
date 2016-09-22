import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { Element } from 'react-scroll';

const Footer = ({ day, month, title, children, classes }) => (
    <Element name="Footer">
        <footer className={classes.footer}>
            <div>
                <div>
                    <h2>{day}</h2>
                    <h3>{month}</h3>
                </div>
                <div>
                    <h4>{title}</h4>
                    {children}
                </div>
            </div>
        </footer>
    </Element>
)

var styles = csjs`
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        padding: 0 20%;
        position: relative;
        & > div {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        & h2, & h3 { margin: 0; }
        & h2 { line-height: 6.05rem; }
        & h4 {
            line-height: 2.675rem;
            margin: 0;
            text-align: left;
        }
        & > div > div:first-of-type { padding-right: 2em; }
        & > div > div:last-of-type {
            padding-left: 2em;
            border-left: 2px solid;
            text-align: left;
        }
        & > div > div > p { margin: 0; }
        & > div > div > p:first-of-type { margin-top: 1em; }
        & a {
            color: black;
            text-decoration: none;
        }
    }
`;

export default withStyles(styles)(Footer);
