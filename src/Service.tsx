import * as React from 'react';
import './Service.css';

class Service extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s-6 offset-s3">
              <div className="row">
                <div className="input-field col s6" id="addressOrigin">
                  <input type="text" className="validate"/>
                  <label htmlFor="addressOrigin">Dirección Origen</label>
                </div>
                <div className="input-field col s6" id="addressDestination">
                  <input type="text" className="validate"/>
                  <label htmlFor="addressDestination">Dirección Destiono</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="desciption">
                  <textarea className="materialize-textarea"></textarea>
                  <label htmlFor="desciption">Descripcion</label>
                </div>
              </div>
              <a className="waves-effect waves-light btn">Ir</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
