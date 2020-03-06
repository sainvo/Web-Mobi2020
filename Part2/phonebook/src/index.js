import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import axios from 'axios'

axios.get('http://localhost:3000/phonebook').then(response => {
    const phonebook = response.data
    ReactDOM.render(
    <App phonebook={phonebook} />, 
    document.getElementById('root'))
})

