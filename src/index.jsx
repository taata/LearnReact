import React, { Component } from 'react';
import { render } from 'react-dom';

import ComponentTest from './components/componentTest';

class App extends Component {
    constructor() {
        super();

        this.state = {
            msg: 'React State'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            msg: 'React State change'
        });
    }

    render() {
        return (
            <div>
                <h3> {this.state.msg} </h3>
                <ComponentTest myMessage={this.state.msg} />
                <button onClick={this.handleClick}> Save </button>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#app')
);