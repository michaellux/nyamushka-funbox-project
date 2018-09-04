import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './App';
import cn from 'cn-decorator'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <ProductList />,document.getElementById('page__root'));
registerServiceWorker();
