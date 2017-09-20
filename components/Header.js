import React from 'react'
import { header } from '../styles.css'
import { Link, Element } from 'react-scroll'

export default class extends React.Component {
    render() {
        let { children, style } = this.props
        return (
            <div>
                <Link to="__below-header" smooth={true}>
                    <Element name="Header">
                        <div className={header} style={style} >
                            {children}
                        </div>
                    </Element>
                </Link>
                <Element key="reference" name="__below-header" />
            </div>
        )
    }
}
