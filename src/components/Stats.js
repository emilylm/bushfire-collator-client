import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody } from "mdbreact";
import { CITIES, STATES } from '../enums';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: this.props.target,
      data: this.props.data
    }
  }


  render() {
    return (
      <MDBCard id="statsCard">
        <MDBCardHeader>
          <strong>{this.state.target.toUpperCase()}</strong>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBTable small borderless id="statsTable">
            <MDBTableBody>
              <tr>
                <td id="tableCol1"><b>{this.state.data.currentFires.area.total} ha</b></td>
                <td id="tableCol2">currently burning</td>
              </tr>
              <tr>
                <td id="tableCol1"><b>{this.state.data.currentFires.count.wildfire}</b></td>
                <td id="tableCol2">current wildfire incidences</td>
              </tr>
            </MDBTableBody>
          </MDBTable>

        </MDBCardBody>
      </MDBCard>
    )
  }
}
