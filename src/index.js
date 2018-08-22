import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './App';
import cn from 'cn-decorator';
import device from 'current-device';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <ProductList />,document.getElementById('page__root'));
registerServiceWorker();
