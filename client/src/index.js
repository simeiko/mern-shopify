import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Loader from './containers/Loader';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Loader />, document.getElementById('root'));
registerServiceWorker();