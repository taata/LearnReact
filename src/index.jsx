import React from 'react';

class App extends React.Component {
    render() {
        return(
            <h2> Oláaaaa! </h2>
        )
    }
}

React.render(
    <App />,
    document.querySelector('#app')
);