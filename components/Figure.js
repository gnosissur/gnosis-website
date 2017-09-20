import React from 'react'
import { figure } from '../styles.css'

export default class extends React.Component {
    render() {
        const { url, position, size, children, stretch, style } = this.props
        const imageStyles = stretch
            ? { minHeight: 'auto' }
            : {
                  backgroundImage: `url(${url})`,
                  backgroundPosition: position || 'center',
                  backgroundSize: size || 'cover',
              }

        return (
            <div
                className={figure}
                style={{
                    ...imageStyles,
                    ...style,
                }}>
                {stretch && <img style={{ position: 'absolute', bottom: 0, width: '100%' }} src={url} />}
                {children && <span>{children}</span>}
            </div>
        )
    }
}
