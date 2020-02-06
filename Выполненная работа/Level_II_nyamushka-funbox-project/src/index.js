import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <ProductList />,document.getElementById('page__root'));
registerServiceWorker();
