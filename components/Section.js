import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Section = ({ title, children, classes }) => (
    <section className={classes.section}>
        <h3>{title}</h3>
        {children}
    </section>
)

const styles = csjs`
    .section {
        margin: 0;
        width: 100%;
        padding: 0 20%;
        position: relative;        
        min-height: auto;
        padding-top: 8em;
        padding-bottom: 8em;
        & > p {
            margin-bottom: 1.875em;
            color: inherit;
            text-align: justify;
        }
        & > *:first-child {
            margin: 0;
            margin-bottom: 1.25em;
            text-align: inherit;
        }
        &:nth-of-type(even) { text-align: right; }
        &:nth-of-type(odd) { text-align: left; }
    }
`;

export default withStyles(styles)(Section);
