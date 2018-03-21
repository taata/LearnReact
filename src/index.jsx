import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import ComponentTest from './components/componentTest';

class App extends Component {
    render() {
        return(
          <ComponentTest />
        )
    }
}

render(
    <App />,
    document.querySelector('#app')
);