import React from 'react';
import { gridItem } from '../styles.css'
console.log(gridItem)

export default class GridItem extends React.Component {
    render() {
        let { classes, onItemClicked } = this.props;
        let { day, month, time, title, height, image, position } = this.props.item;
        return (
            <div className={gridItem} style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: position || 'center' }} onClick={() => onItemClicked(this.props.item)}>
                <div className="gradient" />
                <div className="content">
                    <h6>{title}</h6>
                </div>
            </div>
        )
    }
}
