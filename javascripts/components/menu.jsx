import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        var app_style = {
            textAlign: 'center',
            marginTop: '100px'
        }
        var width_style = {
            width: '250px'
        }
        var each_btn_style = {
            margin: '50px auto',
            width: '250px'
        }
        return (
            <div className="app" style={ app_style }>

                <div style={each_btn_style}>
                    <Button
                        variant="raised"
                        color="primary"
                        style={ width_style }
                    >
                        業務開始
                    </Button>
                </div>
                <div style={each_btn_style}>
                    <Button
                        variant="raised"
                        color="primary"
                        style={ width_style }
                    >
                        プリンタ設定
                    </Button>
                </div>
                <div style={each_btn_style}>
                    <Button
                        variant="raised"
                        color="primary"
                        style={ width_style }
                    >
                        端末設定
                    </Button>
                </div>
                <div style={each_btn_style}>
                    <Button
                        variant="raised"
                        color="primary"
                        style={ width_style }
                    >
                        ログアウト
                    </Button>
                </div>
            </div>

        );
    }
}

export default Login;
