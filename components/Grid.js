import React from 'react'
import Media from 'react-media'
import StackedGrid from './StackedGrid'
import { grid } from '../styles.css'

export default class Grid extends React.Component {
    render() {
        let { classes, children, title, data, component: Component, onItemClicked } = this.props
        return (
            <Media query="(max-width: 1224px)">
                {matches => (
                    <StackedGrid occupySpace={true} margin={0} columns={matches ? 2 : 4} className={grid}>
                        {data.map(item => (
                            <Component
                                key={item.title}
                                height={item.height}
                                item={item}
                                onItemClicked={onItemClicked}
                            />
                        ))}
                    </StackedGrid>
                )}
            </Media>
        )
    }
}
