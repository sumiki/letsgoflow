// @flow

import React, { Component } from 'react';
import Util from './../lib/util.js'
type Props = {};

class App extends Component<Props> {
    render() {
        var a = Util.afunc(1)
        //alert(a)
        return (
            <div className="app" style={ { textAlign: 'center' } }>
                <div>Go + React on GAE</div>
                <img src="/static/images/golang.png" style={ { width: '200px' } } />
            </div>

        );
    }
}

export default App;
