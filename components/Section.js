import React from 'react'
import { Element } from 'react-scroll'
import { section } from '../styles.css'

export default class Section extends React.Component {
  render() {
    let { children, title, style, anchor } = this.props
    return (
      <Element name={anchor}>
        <div className={section} style={style}>
          <h3>{title}</h3>
          {children}
        </div>
      </Element>
    )
  }
}
