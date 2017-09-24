import React from 'react'
import { nav } from '../styles.css'

export default class extends React.Component {
    render() {
        let { children, style } = this.props
        let count = 0
        return (
            <ul className={nav} style={style}>
                {children.map(item => <li key={count++}>{item}</li>)}
            </ul>
        )
    }
}
