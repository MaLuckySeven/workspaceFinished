import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Title from './components/index';
import Index from './components/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
