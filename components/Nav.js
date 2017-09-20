import React from 'react'
import { nav } from '../styles.css'

export default class extends React.Component {
    render() {
        let { children, style } = this.props
        let count = 0
        return (
            <div className={nav} style={style}>
                <ul>{children.map(item => <li key={count++}>{item}</li>)}</ul>
            </div>
        )
    }
}
