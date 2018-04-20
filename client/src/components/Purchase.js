import React from 'react';
import Modal from "./Modal";

/**
 * Display purchase form.
 * Uses <Modal/> component.
 *
 * PROPS: productData - product data (required)
 *        back - event handler for modal "Go Back" button (required)
 *
 * @todo finish the form
 * @version 0.1
 * @author Valentyn Simeiko
 */
export default class Purchase extends React.Component {
    render() {
        return <Modal
            back={this.props.back}
            title={"Purchase " + this.props.productData.title}
            content={
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <button>Buy!</button>
                </form>
            }/>;
    }
}