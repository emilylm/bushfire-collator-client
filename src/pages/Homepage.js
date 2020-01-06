import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, Container } from 'reactstrap';
import InteractiveMap from '../components/InteractiveMap'
import MapForm from '../components/MapForm'
import { CITIES, STATES } from '../enums'

const url = "http://localhost:3000"


export default class Homepage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    data: undefined,
    repos: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    options: {
      target: STATES.AGG,
      city: CITIES.LCY
    }
  };

  this.getDataAll = this.getDataAll.bind(this);
  this.getData = this.getData.bind(this);
  this.updateMapOptions = this.updateMapOptions.bind(this);
  this.updateCitySelection = this.updateCitySelection.bind(this);
  this.updateStateSelection = this.updateStateSelection.bind(this);
  }


  componentDidMount() {
      //this.getDataAll();
      //To avoid using mock server too much in dev:
      let reposTemp = {}
      reposTemp.vic = {currentFires:{count:{wildfire:90,nonWildfire:25,total:115},area:{total:1130550.72,unit:"hectares",unquantifiedFires:{smallAreaCount:6,mediumAreaCount:2,largeAreaCount:6,spotAreaCount:2,unknownAreaCount:0}},lastUpdated:"2020-01-06T06:35:13.759Z"}}
      reposTemp.nsw = {currentFires:{count:{wildfire:151,nonWildfire:8,total:159},area:{total:3774232,unit:"hectares",unquantifiedFires:{zeroAreaCount:46}},lastUpdated:"2020-01-06T06:35:18.792Z"}}
      reposTemp.aggregate = {
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
    }

        this.setState({repos: reposTemp, data: {
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

  updateCitySelection(key){
    let prevOptions = this.state.options;
    prevOptions.city = CITIES[key];
    console.log("CITY", JSON.stringify(prevOptions.city))
    this.setState({options: prevOptions})
  }

  updateStateSelection(key){
    let prevOptions = this.state.options;
    prevOptions.target = STATES[key];
    console.log("STATE", JSON.stringify(prevOptions.target));
    const option = STATES[key].label;

    switch(option) {
      case "vic":
        this.setState({
          data: this.state.repos.vic,
          options: prevOptions
        })
        break;
      case "nsw":
        this.setState({
          data: this.state.repos.nsw,
          options: prevOptions
        })
        break;
      case "aggregate":
        this.setState({
          data: this.state.repos.aggregate,
          options: prevOptions
        })
        break;
    }


  }

  updateMapOptions(options) {
    let prevState = this.state.options;
    prevState.target = options.target;
    prevState.city = options.city;
    this.setState({options: prevState})
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
            if (target == this.state.options.target.label){
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
    let key = []
    if (this.state.data != undefined){
      key = [this.state.data.currentFires.area.total, this.state.options.city.lat, this.state.options.city.lng]
    }
    return (
      <div>
      <Container id="homepageContainer" fluid={true}>
      <Row>
      <h3> Australian Bushfires: Current Incident Area Map </h3>
      </Row>
      <Row>

        <Col sm={2} >
        </Col>
        <Col sm={10}>
          <Card className="rounded-0" id="mapFormCard">
            <CardBody>

              <MapForm options={this.state.options} updateStateSelection={this.updateStateSelection} updateCitySelection={this.updateCitySelection}/>

            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col sm={2}>
          <Card className="rounded-0">
            <CardBody>
            <p>
            {JSON.stringify(this.state.data)}
            {JSON.stringify(this.state.options.city)}
            </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm ={10}>
          <Card className="rounded-0" id="mapCard">
            <CardBody>
              {(this.state.data != undefined) ?
              <InteractiveMap key={key} size={this.state.data.currentFires.area.total} lat={this.state.options.city.lat} lng={this.state.options.city.lng}/>
              : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
      </div>
    )
  }
}
