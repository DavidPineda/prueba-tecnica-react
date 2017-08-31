import * as React from 'react';

class Service extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s3 z-depth-1" id="panell">
              <h1>Hola Mundo</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
