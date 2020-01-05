import React from 'react';
import Map from '../components/Map'
import MapOptions from '../components/MapOptions'
const url = "http://localhost:3000/"

export default class Homepage extends React.Component {
  constructor(props: any) {
  super(props);
  this.state = {
    dataAll: undefined,
    dataVIC: undefined,
    dataNSW: undefined,
    options: {
      target: "aggregate",
    }
  };

  this.getData = this.getData.bind(this);
  this.mapTargetToData = this.mapTargetToData.bind(this);
  }


  componentDidMount() {
      this.getData(this.state.options);
  }

  mapTargetToData(target){
    const dataTarget =
      (target == 'aggregate') ? 'dataAll'
    : (target == 'nsw') ? 'dataNSW'
    : (target == 'vic') ? 'dataVIC'
    : undefined;
    return dataTarget
  }

  async getData(options) {
    const dataTarget = this.mapTargetToData(options.target)
    const query = `${url}/${options.target}`;
    const response = await fetch(query)
      .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Device Group Rows could not be fetched');
            }
          })
          .then(data => {
            this.setState({
              [dataTarget] : data
            })
    			})
          .catch(function (error) {
            console.log(error);
          });
		return response;
  }

  render() {
    return (
      <div>
        <h1>This is the Homepage</h1>
        {this.state.dataAll}
      </div>
    )
  }
}
