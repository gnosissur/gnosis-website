import React from 'react'
import { main } from '../styles.css'
import { Link, Element, scrollSpy } from 'react-scroll'
import { Section, Footer } from '../components'

export default class extends React.Component {
    listen = () => scrollSpy.update()

    componentDidMount() {
        window.addEventListener('resize', this.listen)
        this.listen()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listen)
    }

    render() {
        let { children, style } = this.props
        let result = [],
            block
        for (let item of React.Children.toArray(children)) {
            if ((block && item.type === Section) || item.type === Footer) {
                result.push(
                    <Element key={block.key} name={block.to}>
                        {block.array}
                    </Element>,
                )
                block = undefined
            }

            if (!block && item.type === Section)
                block = { key: item.key, to: item.props.anchor || item.props.title, array: [] }
            ;(block ? block.array : result).push(item)
        }

        return (
            <div className={main} style={style}>
                {result}
            </div>
        )
    }
}
