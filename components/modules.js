import React from 'react';
import { Link, Element, scrollSpy } from 'react-scroll';
import style from './modules.styl';

export class Page extends React.Component {
    listen = () => scrollSpy.update();

    componentDidMount() {
        window.addEventListener("resize", this.listen);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.listen);
    }

    render () {
        let result = [], block;
        for (let item of React.Children.toArray(this.props.children)) {
            if (block && item.type === Section || item.type === Footer) {
                result.push(<Element key={block.key} name={block.to}>{block.array}</Element>);
                block = undefined;
            }

            if (!block && item.type === Section)
                block = { key: item.key, to: item.props.title, array: [] };

            (block ? block.array : result).push(item);
        }

        return (
            <main>
                {result}
            </main>
        )
    }
}

export const Nav = ({ children }) => {
    let count = 0;
    return (
        <nav>
            <ul>
                {children.map(item => <li key={count++}>{item}</li>)}
            </ul>
        </nav>
    )
}

export const NavLink = ({ name, to }) => (
    <Link activeClass="active" to={to} smooth={true} spy={true}>
        { name || to }
    </Link>
)

export const Header = ({ title, children }) => (
    <div>
        <Link to="__below-header" smooth={true}>
            <Element name="Header">
                <header>
                    <h1>{title}</h1>
                    <span>{children}</span>
                </header>
            </Element>
        </Link>
        <Element key="reference" name="__below-header" />
    </div>
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
    <Element name="Footer">
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
    </Element>
)
