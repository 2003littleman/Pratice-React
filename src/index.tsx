

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Props from './types';

const canal: string = "XamãNidra";

ReactDOM.render(<App canal={canal} />, document.getElementById('root'));