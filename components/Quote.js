import React from 'react'
import { quote } from '../styles.css'

export default class extends React.Component {
    render() {
        let { children, author, style } = this.props
        return (
            <div className={quote} style={style}>
                <p>"{children}"</p>
                <span>{author}</span>
            </div>
        )
    }
}
