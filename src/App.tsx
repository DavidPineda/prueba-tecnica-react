import * as React from 'react';
import './App.css';

import LoginBox from './components/LoginBox';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s3 z-depth-1" id="panell">
              <LoginBox/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
