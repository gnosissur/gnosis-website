import React from 'react'
import { section } from '../styles.css'

export default class Section extends React.Component {
    render() {
        let { children, title, style } = this.props
        return (
            <div className={section} style={style}>
                <h3>{title}</h3>
                {children}
            </div>
        )
    }
}
