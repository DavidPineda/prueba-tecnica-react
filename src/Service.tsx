import * as React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import ReactMapboxGl  from 'react-mapbox-gl';
// import { GeoJSONLayer } from "react-mapbox-gl";
import axios from 'axios';
import './Service.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZHBpbmVkYWQiLCJhIjoiY2o3MjIyc2R5MGJwNTJ3cGJ2Yzk5YW9zMyJ9.rBp6ZQ8ahZ_hFBWvuzLw3Q'
});
const zoom = [8];

interface State {
  origin: string;
  destination: string;
  description: string;
  distance: string;
  duration: string;
}

// var geojson = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "id": "{marker_id}",
//         "title": "{title}",
//         "description": "{description}",
//         "marker-size": "{simplestyle size}",
//         "marker-color": "{simplestyle color}",
//         "marker-symbol": "{maki symbol}"
//       },
//       "geometry": {
//         "coordinates": [ -74.090448, 4.571749 ],
//         "type": "Point"
//       },
//       "id": "{feature_id}"
//     }
//   ]
// };

// var geojson = {
//   "features": [
//     {
//       "type": "FeatureCollection",
//       "waypoints": [
//         {
//           "name": "Carrera 5",
//           "location": [
//             -74.090448,
//             4.571749
//           ]
//         },
//         {
//           "name": "Autopista Norte - Paralela Occidental",
//           "location": [
//             -74.059394,
//             4.675928
//           ]
//         }
//       ],
//       "routes": [
//         {
//           "legs": [
//             {
//               "steps": [],
//               "weight": 3550.7,
//               "distance": 13788.6,
//               "summary": "",
//               "duration": 3404.5
//             }
//           ],
//           "weight_name": "cyclability",
//           "geometry": "m|{ZhxecMuAiA}DlEmVwO{ZoX{AaI{e@iIosAmo@mu@gSmc@_H{rEg`@PeB_t@u\\mXhd@}S_LmHtMuIiEqZiBbAqLuTuBzB}B",
//           "weight": 3550.7,
//           "distance": 13788.6,
//           "duration": 3404.5
//         }
//       ],
//       "code": "Ok",
//       "uuid": "cj72akhq30agy73nj70360ucw"
//     }
//   ]
// };

class Service extends React.Component {

  public state: State = {
    origin: '',
    destination: '',
    description: '',
    distance: 'Distancia 0KM',
    duration: 'Duración 0 MIN'
  };

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
                  <input
                    type="text"
                    className="validate"
                    value={this.state.origin}
                    onChange={this.updateOrigin.bind(this)}
                  />
                  <label htmlFor="addressOrigin">Dirección Origen</label>
                </div>
                <div className="input-field col s6" id="addressDestination">
                  <input
                    type="text"
                    className="validate"
                    value={this.state.destination}
                    onChange={this.updateDestination.bind(this)}
                  />
                  <label htmlFor="addressDestination">Dirección Destiono</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="desciption">
                  <textarea
                    className="materialize-textarea"
                    value={this.state.description}
                    onChange={this.updateDescription.bind(this)}>
                  </textarea>
                  <label htmlFor="desciption">Descripcion</label>
                </div>
              </div>
              <a className="waves-effect waves-light btn" onClick={this.getPoints.bind(this)}>Ir</a>
            </div>
          </div>
        </div>
        <div className="results">
          <div className="row">
            <div className="col s6 center">
              <h6>{this.state.distance}</h6>
            </div>
            <div className="col s6 center">
              <h6>{this.state.duration}</h6>
            </div>
          </div>
        </div>
        <div className="map-box">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            zoom={zoom}
            containerStyle={{
              height: '100%',
              width: '100%'
            }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[-74.0934,4.573]}/>
            </Layer>
          </Map>
        </div>
      </div>
    );
  }

  public updateOrigin(e: any): void {
    this.setState({
      origin: e.target.value
    });
  }

  public updateDestination(e: any): void {
    this.setState({
      destination: e.target.value
    });
  }

  public updateDescription(e: any): void {
    this.setState({
      description: e.target.value
    });
  }

  public getPoints () {
    let apiKey: string = 'AIzaSyC2e0MFfmtI36ss8nVSfLMYRPnp50PhtUs';
    let origin: string = this.serializeUrl(this.state.origin);
    let destination: string = this.serializeUrl(this.state.destination);
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`)
    .then(res => {
      let data: any = res;
      this.setState({
        distance: data.data.routes[0].legs[0].distance.text,
        duration: data.data.routes[0].legs[0].duration.text
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  public serializeUrl (url: string) {
    return encodeURIComponent(url.replace('undefined', ''));
  }

}

export default Service;
