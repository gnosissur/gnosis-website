import React from 'react'
import { footer } from '../styles.css'
import { Element } from 'react-scroll'

export default class extends React.Component {
    render() {
        let { day, month, title, children, style } = this.props
        return (
            <Element name="Footer">
                <div className={footer} style={style}>
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
                </div>
            </Element>
        )
    }
}
