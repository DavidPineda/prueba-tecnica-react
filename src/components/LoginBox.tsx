import * as React from 'react';
import './LoginBox.css';

class LoginBox extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h5 id="title">Formulario de Ingreso</h5>
        <form>
          <div className="input-field" id="username">
            <input type="text" className="validate"/>
            <label htmlFor="username">Usuario</label>
          </div>
          <div className="input-field" id="password">
            <input type="password" className="validate"/>
            <label htmlFor="password">Contrase&ntilde;a</label>
          </div>
          <a className="waves-effect waves-light btn" id="loginbtn" onClick={() => this.login()}>Ingresar</a>
        </form>
      </div>
    );
  }

  login() {
    alert('Hola Mundo');
  }
}

export default LoginBox;
