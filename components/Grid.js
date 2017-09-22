import React from 'react'
import StackedGrid from './StackedGrid'
import { grid } from '../styles.css'

export default class Grid extends React.Component {
    render() {
        let { classes, children, title, data, component: Component, onItemClicked } = this.props
        return (
            <StackedGrid occupySpace={true} margin={0} columns={media(2, 4)} className={grid}>
                {data.map(item => (
                    <Component key={item.title} height={item.height} item={item} onItemClicked={onItemClicked} />
                ))}
            </StackedGrid>
        )
    }
}

function media(mobile, desktop) {
    return window.matchMedia('(max-device-width: 1224px)').matches ? mobile : desktop
}
