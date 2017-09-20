import React from 'react'
import { block } from '../styles.css'

export default class extends React.Component {
    render() {
        let { children, style } = this.props
        return (
            <div className={block} style={style}>
                {children}
            </div>
        )
    }
}
