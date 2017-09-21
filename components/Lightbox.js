import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import { lightbox, item, content, image } from '../styles.css'

export default class Lightbox extends React.Component {
    state = { active: false }
    toggle = () => this.setState({ active: !this.state.active })
    componentWillReceiveProps(props) {
        this.setState({ active: !!props.item })
    }
    render() {
        let { item, onClicked } = this.props
        let { active } = this.state
        return (
            <Motion
                defaultStyle={{ opacity: 0 }}
                style={{
                    opacity: spring(active ? 1 : 0),
                }}>
                {({ opacity }) => (
                    <section
                        className={lightbox}
                        onClick={this.toggle}
                        style={{
                            opacity,
                            pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                            visibility: opacity > 0 ? 'visible' : 'hidden',
                            cursor: opacity > 0.5 ? 'pointer' : 'inherit',
                        }}>
                        {item && (
                            <Motion
                                defaultStyle={{ scale: 0.95 }}
                                style={{
                                    scale: spring(active ? 1 : 0.95, presets.gentle),
                                }}>
                                {({ scale }) => (
                                    <div style={{ transform: `scale(${scale})` }}>
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: item.position || 'center',
                                            }}
                                        />
                                        <div>
                                            <h4>{item.title}</h4>
                                            {item.day && (
                                                <h5>
                                                    {item.day}. {item.month} {item.time}
                                                </h5>
                                            )}
                                            <span>{item.content}</span>
                                        </div>
                                    </div>
                                )}
                            </Motion>
                        )}
                    </section>
                )}
            </Motion>
        )
    }
}
