import React from 'react';
import ReactDOM from 'react-dom';
import ClaseUno from './clase-uno/ClaseUno';
import FormState from './clase-uno/FormState';
import ApiFetch from './clase-uno/components/giphy/ApiFetch'

ReactDOM.render(
  <React.StrictMode>
    <ApiFetch />
  </React.StrictMode>,
  document.getElementById('root')
);

