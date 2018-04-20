import React from 'react';

/**
 * Display modal window with overlay effect.
 *
 * PROPS: title - modal window title (required)
 *        content - JSX content to be placed inside (required)
 *        back - event handler for "Go Back" button.
 *
 * @version 0.1
 * @author Valentyn Simeiko
 */
export default class Modal extends React.Component {
    render() {
        return (
            <div id="overlay">
                <div id="modal">
                    <div>{this.props.title}</div>
                    <div>{this.props.content}</div>
                    <button className="back-button" onClick={this.props.back}>Go Back</button>
                </div>
            </div>
        );
    }
}