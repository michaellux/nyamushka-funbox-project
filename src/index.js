import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './App';
import cn from 'cn-decorator'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <ProductList />,document.getElementById('root'));
registerServiceWorker();
