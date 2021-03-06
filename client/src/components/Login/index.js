import React, { Component } from 'react'
import { login } from './scripts'
import { Link } from 'react-router-dom'
import Jumbo from '../Jumbo'
import "./style.css";


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <Jumbo backgroundImage="https://i.imgur.com/3hCgTuP.png" backgroundPositionY="40%" backgroundPositionX="3%">
                <div className="container animation">
                <div className="row gap100">
                    <div id="loginform">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 id="headerTitle">Sign In</h1>
                                <div className="form-group">
                                    <input type="username"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" id="button">Login</button>
                                <Link to="/register" id="loggin-a">Don't have an account yet?</Link>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </Jumbo>
        )
    }
}

export default Login