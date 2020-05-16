import React, { Component} from 'react';

class Login extends Component {

  state = {
    credentials: {username: '', password: '', roles: ['WRITER'], email: '', 
    first_name: '', last_name: ''},
    login_credentials: {
      client_id:"FEqMPOyqzHI3FkrvS5GmduZa3OFy8plFL5sEBuHd", 
      client_secret:"BwDAYCbgvIUJO4bjd1cLq0iVPMFe4mRP3AIExj8tVSGWQs5QeDvwlPPl1ARerU4kq4fUc6HUqOTbksnHlmsNfWulDWFuVg5G4I15KLYsSVm8KYgsbVZkM0gLRddMcHum", 
      grant_type:"password",
      username: "",
      password: "",
    }
  }

  login = event => {
    fetch('https://corona-watch-esi.herokuapp.com/auth/token/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.login_credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
        console.log(data)
        console.log(data.access_token)
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('refreshToken'))
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    fetch('https://corona-watch-esi.herokuapp.com/account/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});

    const login_cred = this.state.login_credentials;
    login_cred[event.target.name] = event.target.value;
    this.setState({login_credentials: login_cred});
  }

  render() {
    return (
      <div>
        <h1>Login user form</h1>

        <label>
          Username:
          <input type="text" name="username"
           value={this.state.login_credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password"
           value={this.state.login_credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Login;
