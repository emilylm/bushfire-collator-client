import React from 'react';
import { Row, Col, Card, CardBody, CardHeader, Container } from 'reactstrap';
import InteractiveMap from '../components/InteractiveMap';
import MapForm from '../components/MapForm';
import Stats from '../components/Stats';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from "mdbreact";
import { CITIES, STATES } from '../enums';
import FlipMove from 'react-flip-move';
import {default as melNSW} from '../assets/mel-nsw.geojson';
import {default as melVIC} from '../assets/mel-vic.geojson';
import {default as melAGG} from '../assets/mel-agg.geojson';
import {default as sydNSW} from '../assets/syd-nsw.geojson';
import {default as sydVIC} from '../assets/syd-vic.geojson';
import {default as sydAGG} from '../assets/syd-agg.geojson';
import {default as bneNSW} from '../assets/bne-nsw.geojson';
import {default as bneVIC} from '../assets/bne-vic.geojson';
import {default as bneAGG} from '../assets/bne-agg.geojson';




const url = "https://firedatacollator.emilylm.me"

const ORDERS ={
  aggregate: 1,
  nsw: 2,
  vic: 3
}

const updateOrder = (target, order) => {
  order.unshift(
    order.splice(
      order.findIndex(
        item => item == target),
    1)[0]
  )

  return order
}

const StatsList = ({order, repos}) => (
      <FlipMove
      staggerDurationBy="30"
      duration={500}
      enterAnimation={'fade'}
      leaveAnimation={'fade'}>
        {order.map(item => (
          <Stats key={ORDERS[item]} target={item} data={repos[item]} isOpen={(item === order[0])} first={order[0]}/>
        ))}
      </FlipMove>
);

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
    MEL: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    SYD: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    BNE: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    DRW: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    HBA: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    CAN: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    PER: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    ADL: {
      aggregate: undefined,
      nsw: undefined,
      vic: undefined
    },
    options: {
      target: STATES.AGG,
      city: CITIES.MEL
    },
    order: ['aggregate', 'vic', 'nsw']
  };

  this.getDataAll = this.getDataAll.bind(this);
  this.getData = this.getData.bind(this);
  this.getPolys = this.getPolys.bind(this);
  this.getPolyMel = this.getPolyMel.bind(this);
  this.fetchJson = this.fetchJson.bind(this);
  this.updateCitySelection = this.updateCitySelection.bind(this);
  this.updateStateSelection = this.updateStateSelection.bind(this);
  }







  componentDidMount() {
      this.getDataAll();
      /*let melTemp = {};
      melTemp.vic = melVIC;
      melTemp.nsw = melNSW;
      melTemp.aggregate = melAGG;
      let sydTemp = {};
      sydTemp.vic = sydVIC;
      sydTemp.nsw = sydNSW;
      sydTemp.aggregate = sydAGG;
      let bneTemp = {};
      bneTemp.vic = bneVIC;
      bneTemp.nsw = bneNSW;
      bneTemp.aggregate = bneAGG;
      this.setState({MEL: melTemp, SYD: sydTemp, BNE: bneTemp})
      */
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
    let order = this.state.order;
    prevOptions.target = STATES[key];
    console.log("STATE", JSON.stringify(prevOptions.target));
    const option = STATES[key].label;
    console.log("STATE OPTION", option)
    switch(option) {
      case "vic":
        order = updateOrder('vic', order)
        console.log("ORDER", JSON.stringify(order))
        this.setState({
          data: this.state.repos.vic,
          options: prevOptions,
          order
        })
        break;
      case "nsw":
        order = updateOrder('nsw', order)
        console.log("ORDER", JSON.stringify(order))
        this.setState({
          data: this.state.repos.nsw,
          options: prevOptions,
          order
        })
        break;
      case "aggregate":
        order = updateOrder('aggregate', order)
        console.log("ORDER", JSON.stringify(order))
        this.setState({
          data: this.state.repos.aggregate,
          options: prevOptions,
          order
        })
        break;
    }
  }

  async getPolyMel() {
    const query = `${url}/polys/mel`;
    try {
      let data = await this.fetchJson(query);
      return data;
    } catch(err){
      console.log(err)
    }
  }

  async getPolys() {
    const query = `${url}/polys`;
    try {
      let data = await this.fetchJson(query);
      return data;
    } catch(err){
      console.log(err)
    }
  }

  async getDataAll(){

    const repos = {}
    console.log("REPOS1", JSON.stringify(repos))
    try {
    let mel_data = {}
    const mel = await this.getPolyMel();
    mel_data.vic = mel.vic
    mel_data.nsw = mel.nsw
    mel_data.aggregate = mel.aggregate
    this.setState({MEL: mel_data});
    const [aggregate, vic, nsw] = await Promise.all([
      this.getData("aggregate"),
      this.getData("vic"),
      this.getData("nsw")
    ])



    const polys = await this.getPolys();
    let {SYD, BNE, ADL, PER, HBA, CAN, DRW} = polys
    this.setState({SYD, BNE, ADL, PER, HBA, CAN, DRW})
    repos.aggregate = aggregate
    repos.vic = vic
    repos.nsw = nsw
    console.log("REPOS2", JSON.stringify(repos.aggregate));
    this.setState({ repos: repos });
    } catch(err){
      console.log(err)
    }
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
          <MDBCard className="rounded-0" id="sidebarHead">
            <MDBCardBody>
            <span id="shContent">STATS</span>
            </MDBCardBody>
          </MDBCard>
            <MDBCard className="rounded-0" id="sidebarCard">
              <MDBCardBody>
              { ((this.state.repos.nsw != undefined) && (this.state.repos.nsw != undefined) && (this.state.repos.nsw != undefined)) ?
              <StatsList order={this.state.order} repos={this.state.repos}/>
              : null
              }
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
                    {((this.state.data != undefined) &&  (this.state.repos.aggregate != undefined) && (this.state.MEL.aggregate != undefined)) ?
                    <InteractiveMap key={key} size={this.state.data.currentFires.area.total} lat={this.state.options.city.lat} lng={this.state.options.city.lng} maxSize={this.state.repos.aggregate.currentFires.area.total} poly={((`${this.state.options.city.abr}` in this.state) && (`${this.state.options.target.label}` in this.state[`${this.state.options.city.abr}`])) ? this.state[`${this.state.options.city.abr}`][`${this.state.options.target.label}`] : undefined} maxPoly={((`${this.state.options.city.abr}` in this.state) && ("aggregate" in this.state[`${this.state.options.city.abr}`])) ? this.state[`${this.state.options.city.abr}`].aggregate : undefined} city={this.state.options.city.abr}/>
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
