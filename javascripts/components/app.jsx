import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="app" style={ { textAlign: 'center' } }>
                <div>Go + React on GAE</div>
                <img src="/static/images/golang.png" style={ { width: '200px' } } />
            </div>

        );
    }
}

export default App;
