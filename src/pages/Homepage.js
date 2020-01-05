import React from 'react';
import InteractiveMap from '../components/InteractiveMap'
import MapOptions from '../components/MapOptions'
const url = "http://localhost:3000"



export default class Homepage extends React.Component {
  constructor(props: any) {
  super(props);
  this.state = {
    data: undefined,
    repos: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    options: {
      target: "aggregate",
    }
  };

  this.getDataAll = this.getDataAll.bind(this);
  this.getData = this.getData.bind(this);
  this.mapTargetToData = this.mapTargetToData.bind(this);
  }


  componentDidMount() {
      //this.getDataAll();
      //To avoid using mock server too much in dev:
        this.setState({data: {
        currentFires: {
            count: {
                wildfire: 241,
                nonWildfire: 33,
                total: 274
            },
            area: {
                total: 4904782.72,
                nsw: 3774232,
                vic: 1130550.72,
                unit: "hectares",
                unquantifiedFires: {
                    smallAreaCount: 6,
                    mediumAreaCount: 2,
                    largeAreaCount: 6,
                    unknownAreaCount: 0,
                    spotAreaCount: 2,
                    zeroAreaCount: 46
                }
            },
            lastUpdated: "2020-01-05T07:20:38.519Z"
        }
      }})
  }

  mapTargetToData(target){
    const dataTarget =
      (target == 'aggregate') ? 'dataAll'
    : (target == 'nsw') ? 'dataNSW'
    : (target == 'vic') ? 'dataVIC'
    : undefined;
    return dataTarget
  }

  async getDataAll(){
    const { repos } = { ...this.state };
    const currentState = repos;
    currentState.aggregate = await this.getData("aggregate");
    currentState.vic = await this.getData("vic");
    currentState.nsw = await this.getData("nsw");
    this.setState({ repos: currentState });
  }

  async getData(target) {
    const dataTarget = this.mapTargetToData(target)
    const query = `${url}/${target}`;
    const response = await fetch(query)
      .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Device Group Rows could not be fetched');
            }
          })
          .then(data => {
            if (target == this.state.options.target){
              this.setState({ data });
              console.log("TARGET", target)
            }
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
        <p>
        {JSON.stringify(this.state.data)}
        {this.state.repos.nsw}
        </p>
        <InteractiveMap />
      </div>
    )
  }
}
