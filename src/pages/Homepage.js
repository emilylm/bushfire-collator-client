import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, Container } from 'reactstrap';
import InteractiveMap from '../components/InteractiveMap';
import MapForm from '../components/MapForm';
import Stats from '../components/Stats';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from "mdbreact";
import { CITIES, STATES } from '../enums';


const url = "https://firedatacollator.emilylm.me/"


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
      city: CITIES.PAR
    }
  };

  this.getDataAll = this.getDataAll.bind(this);
  this.getData = this.getData.bind(this);
  this.fetchJson = this.fetchJson.bind(this);
  this.updateCitySelection = this.updateCitySelection.bind(this);
  this.updateStateSelection = this.updateStateSelection.bind(this);
  }


  componentDidMount() {
      this.getDataAll();
      //To avoid using mock server too much in dev:
      /*
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
      }})*/
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
    console.log("STATE OPTION", option)
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


  async getDataAll(){
    const repos = {}
    console.log("REPOS1", JSON.stringify(repos))
    const [aggregate, vic, nsw] = await Promise.all([
      this.getData("aggregate"),
      this.getData("vic"),
      this.getData("nsw")
    ])
    repos.aggregate = aggregate
    repos.vic = vic
    repos.nsw = nsw
    console.log("REPOS2", JSON.stringify(repos.aggregate));
    this.setState({ repos: repos });
  }


async fetchJson(url) {
  let response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Data fetch failed');;
  }
}

async getData(target) {
  const query = `${url}/${target}`;
  try {
    let data = await this.fetchJson(query);
    if (target == this.state.options.target.label){
      this.setState({ data });
      console.log("TARGET", JSON.stringify(data))
    }
    return data;
  } catch(err){
    console.log(err)
  }
}



  render() {
    let key = []
    if (this.state.data != undefined){
      key = [this.state.options.city.lat, this.state.options.city.lng]
    }
    return (
      <MDBContainer fluid id="homepageContainer">
        <MDBRow>
          <MDBCol id="col1">
            <MDBCard className="rounded-0" id="sidebarCard">
              <MDBCardBody>
              { (this.state.repos.nsw != undefined) ?
              <Stats target={"vic & nsw"} data={this.state.repos.aggregate}/>
              : null }
              { (this.state.repos.nsw != undefined) ?
              <Stats target={"nsw"} data={this.state.repos.nsw}/>
              : null }
              { (this.state.repos.nsw != undefined) ?
              <Stats target={"vic"} data={this.state.repos.vic}/>
              : null }
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBRow id="row2">
              <MDBCol>
              <MDBCard className="rounded-0" id="mapHeaderCard">
                <MDBCardBody>
                  <MapForm options={this.state.options} updateStateSelection={this.updateStateSelection} updateCitySelection={this.updateCitySelection}/>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBCard className="rounded-0" id="mapCard">
                  <MDBCardBody>
                    {((this.state.data != undefined) &&  (this.state.repos.aggregate != undefined)) ?
                    <InteractiveMap key={key} size={this.state.data.currentFires.area.total} lat={this.state.options.city.lat} lng={this.state.options.city.lng} maxSize={this.state.repos.aggregate.currentFires.area.total}/>
                    : null}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
