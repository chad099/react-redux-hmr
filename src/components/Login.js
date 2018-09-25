import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect((state) => ({
    auth: state.auth
}))

export default class Login extends Component {
    render() {
        return(
            <div>
                I AM LOGIN
            </div>
        );
    }
}