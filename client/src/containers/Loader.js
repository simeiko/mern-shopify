import React from 'react';
import Loading from '../components/Loading';
import Main from "./Main";
import {Config} from "../Config";

/**
 * Loader Component.
 * Conditional render: While data is loading, will display <Loading/> component.
 *                     Afterwards, will display <Main/> layout.
 * @version 1.0
 * @author Valentyn Simeiko
 */
export default class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productData: null
        };
    }

    /**
     * Fetch product data.
     */
    componentWillMount() {
        fetch(Config.fetch_link)
            .then(response => response.json())
            .then(response =>  this.setState({ productData: response }) )
            .catch(error => alert(error));
    }

    render() {
        return this.state.productData ? <Main productData={this.state.productData}/> : <Loading/>;
    }
}