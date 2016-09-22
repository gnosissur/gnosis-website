import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Figure = ({ url, position, size, classes }) => (
    <figure className={classes.figure} style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: position || "center",
        backgroundSize: size || "cover"}} />
)

const styles = csjs`
    .figure {
        margin: 0;
        width: 100%;
        padding: 0 20%;
        position: relative;
        min-height: 80vh;
        padding: 0;
    }
`;

export default withStyles(styles)(Figure);
