import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody } from "mdbreact";
import { CITIES, STATES } from '../enums';


const formatSize = (size) => {
  let formatted = "";
  if (size/1000000 > 1) {
    let formatted = (size/1000000.00).toFixed(2).toString() + "m"
    return formatted
  } else {
    let formatted = size.toLocaleString(undefined, {maximumFractionDigits:2})
    return formatted
  }
}

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: this.props.target,
      data: this.props.data,
      size: formatSize(this.props.data.currentFires.area.total)
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
                <td id="tableCol1"><b>{this.state.size} ha</b></td>
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
