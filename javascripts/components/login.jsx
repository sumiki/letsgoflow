import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            agent_id: '',
            password: '',
            rememberme: false,
            validate_agent_id: '',
            validate_password: ''
        }
    }

    handleChange = (attr, e) => {
        if( attr === 'rememberme' ){
            this.setState( { rememberme: ( ! this.state.rememberme ) } )
        } else {
            var obj = {}
            obj[attr] = e.target.value
            this.setState(obj)
        }
    }

    handleSubmit = () => {
        this.setState({
            validate_agent_id: 'TEXT',
            validate_password: 'TEXT'
        })
    }

    render() {
        var app_style = {
            textAlign: 'center',
            marginTop: '100px'
        }
        var width_style = {
            width: '250px'
        }
        return (
            <div className="app" style={ app_style }>

                <div>ログインしてください</div>

                <div>
                    <TextField
                        id="agent_id"
                        label="エージェントID"
                        value={this.state.agent_id}
                        helperText={ this.state.validate_agent_id }
                        error={ this.state.validate_agent_id != '' }
                        onChange={ (e, value) => { this.handleChange('agent_id', e, value) } }
                        margin="normal"
                        style={ width_style }
                    />
                </div>

                <div>
                    <TextField
                        id="pass"
                        label="パスワード"
                        value={this.state.password}
                        helperText={ this.state.validate_password }
                        error={ this.state.validate_password != '' }
                        onChange={ (e, value) => { this.handleChange('password', e, value) } }
                        margin="normal"
                        type="password"
                        style={ width_style }
                    />
                </div>

                <div style={ { marginTop: '50px' } }>

                    <div style={ { marginTop: '20px' } }>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.rememberme}
                                    onChange={ (e, value) => { this.handleChange('rememberme', e, value) } }
                                    value="remember"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                        />
                    </div>

                    <Button
                        variant="raised"
                        color="primary"
                        style={ width_style }
                        onClick={ this.handleSubmit }
                    >
                        Log In
                    </Button>
                </div>


            </div>

        );
    }
}

export default Login;
