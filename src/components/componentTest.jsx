import React, { Component } from 'react';

class ComponentTest extends Component {
    render() {
        const { myMessage } = this.props;
        return(
            <div>
                 <h3> My Component :) </h3>
                 <h4> {myMessage} </h4>
            </div>
        );
    }
}

export default ComponentTest;