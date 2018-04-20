import React from 'react';
import {Config} from "../Config";
import Product from "../components/Product";

/**
 * Main layout.
 * Render a full page with one Product.
 *
 * PROPS: productData - required
 */
export default class Main extends React.Component {
    render() {
        return (
            <div id="main-container">
                <header>
                    <h1>{Config.shop_title}</h1>
                    <p>{Config.shop_desc}</p>
                </header>

                <main>
                    <Product data={this.props.productData}/>
                </main>

                <footer>
                    <p dangerouslySetInnerHTML={{ __html: Config.footer_copy }} />
                </footer>
            </div>
        );
    }
}