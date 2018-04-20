import React from 'react';
import Purchase from "./Purchase";

/**
 * Represents a particular Product.
 *
 * PROPS: data - product data (required)
 *
 * @version 1.0
 * @author Valentyn Simeiko
 */
export default class Product extends React.Component {
    /**
     * Set inner state & bind event handler.
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            purchase: false // Display modal with purchase form
        };

        this.togglePurchaseForm = this.togglePurchaseForm.bind(this);
    }

    /**
     * Toggle this.state.purchase (bool).
     * Displays the <Purchase/> Component (Purchase Form).
     */
    togglePurchaseForm() {
        this.setState({
            purchase: !this.state.purchase
        });
    }

    render() {
        const purchase = this.state.purchase
            ? <Purchase productData={this.props.data} back={this.togglePurchaseForm} />
            : null;

        return (
            <section className="product">
                {purchase}
                <header>
                    <h2>{this.props.data.title}</h2>
                    <span>Price: <span>${this.props.data.price}</span></span>
                    <img src={this.props.data.image_src} alt="Product Image" />
                </header>

                <div dangerouslySetInnerHTML={{ __html: this.props.data.body_html }} />
                <button onClick={this.togglePurchaseForm}>Purchase</button>
            </section>
        );
    }
}