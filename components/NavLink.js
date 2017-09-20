import React from 'react'
import { active } from '../styles.css'
import { Link } from 'react-scroll'

export default class extends React.Component {
    render() {
        let { to, name } = this.props
        return (
            <Link activeClass={active} to={to} smooth={true} spy={true}>
                {name || to}
            </Link>
        )
    }
}
