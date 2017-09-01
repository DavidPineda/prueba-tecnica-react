import * as React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import './LoginBox.css';

interface State {
  username: string;
  password: string;
}

class LoginBox extends React.Component {

  public state: State = {
    username: '',
    password: ''
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h5 id="title">Formulario de Ingreso</h5>
        <form>
          <div className="input-field" id="username">
            <input
              type="text"
              className="validate"
              value={this.state.username}
              onChange={this.updateUsername.bind(this)}
            />
            <label htmlFor="username">Usuario</label>
          </div>
          <div className="input-field" id="password">
            <input
              type="password"
              className="validate"
              value={this.state.password}
              onChange={this.updatePassword.bind(this)}
            />
            <label htmlFor="password">Contrase&ntilde;a</label>
          </div>
          <a className="waves-effect waves-light btn" id="loginbtn" onClick={() => this.login()}>Ingresar</a>
        </form>
      </div>
    );
  }

  public updateUsername(e: any): void {
    this.setState({
      username: e.target.value
    });
  }

  public updatePassword(e: any): void {
    this.setState({
      password: e.target.value
    });
  }

  login(): void {
    if (this.state.username !== '' && this.state.password !== '') {
      axios.get("http://localhost:3004/users")
      .then(users => {
        let user: any = users.data[0];
        if (user.name === this.state.username && user.password === this.state.password)
          browserHistory.push('/service');
      })
      .catch(err => {
        console.log(err.message);
      });
    }
  }
}

export default LoginBox;
