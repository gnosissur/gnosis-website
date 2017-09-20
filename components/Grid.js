import React from 'react'
import StackedGrid from './StackedGrid'
import { grid } from '../styles.css'

export default class Grid extends React.Component {
    render() {
        let { classes, children, title, data, control: Control, onItemClicked } = this.props
        return (
            <section className={grid}>
                <StackedGrid occupySpace={true} margin={0} columns={media(2, 3)}>
                    {data.map(item => (
                        <Control key={item.title} height={item.height} item={item} onItemClicked={onItemClicked} />
                    ))}
                </StackedGrid>
            </section>
        )
    }
}

function media(mobile, desktop) {
    return window.matchMedia('(max-device-width: 1224px)').matches ? mobile : desktop
}
