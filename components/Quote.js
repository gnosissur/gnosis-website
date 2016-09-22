import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Quote = ({ author, children, classes }) => (
    <blockquote className={classes.quote}>
        <p>"{children}"</p>
        <span>{author}</span>
    </blockquote>
)

var styles = csjs`
    .quote {
        margin: 0;
        width: 100%;
        position: relative;
        min-height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 10%;
        & p {
            font-family: 'Gotham-Medium', sans-serifc;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            line-height: 1;
            font-size: 4em;
            margin-top: 0;
            margin-bottom: 0.5em;
            color: black;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: contain;
            background-position: center;
            background-image: url(/assets/bg.jpg);
        }
        & span {
            text-align: center;
            font-style: italic;
        }
    }
`;

export default withStyles(styles)(Quote);
