import { store } from './store';
import React from 'react';
import ReactDom from 'react-dom';
import { Main } from './component/Main'
// console.log(store.getState());
ReactDom.render(<Main />, document.getElementById('app'))