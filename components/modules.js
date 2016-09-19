import React from 'react';
import { Link, Element } from 'react-scroll';
import style from './modules.styl';

export const Page = ({ children }) => {

    let array = React.Children.toArray(children);
    let content = [
        array.slice(0, 1),
        <Element key="link" name="content" />,
        ...array.slice(1)
    ];

    return (
        <main>
            {content}
        </main>
    )
}

export const Header = ({ title, children }) => (
    <Link to="content" smooth={true}>
    <header>
        <h1>{title}</h1>
        <span>{children}</span>
    </header>
    </Link>
)

export const Quote = ({ author, children }) => (
    <blockquote>
        <p>"{children}"</p>
        <span>{author}</span>
    </blockquote>
)

export const Section = ({ title, children }) => (
    <section>
        <h3>{title}</h3>
        {children}
    </section>
)

export const Figure = ({ url, position, size }) => (
    <figure style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: position || "center",
        backgroundSize: size || "cover"}} />
)

export const Footer = ({ day, month, title, children}) => (
    <footer>
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
)
