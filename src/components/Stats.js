import React from "react";
import { MDBCard, MDBBtn, MDBIcon, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody } from "mdbreact";
import { CITIES, STATES, MONTHS } from '../enums';


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


const getDateObj = (dateString) => {
    let msec = Date.parse(dateString);
    let d = new Date(msec);
    console.log("d", d);
    return d.toString();
}




const getDateString = (dateString) => {
  let msec = Date.parse(dateString);
  let d = new Date(msec);
  console.log("DDDDD", d)
  let month = (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString().substring(2);
  console.log("MONTH", month);
  let monthStr = MONTHS[month];

  const date = monthStr + ' ' + day + ', ' + year;
  //const date = [year, month, day].join('-');

/*
  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;
*/


  //const timezone = d.getTimezoneOffset();

  let hour = d.getHours(),
        minute = d.getMinutes(),
        //second = d.getSeconds(),
        hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
        minuteFormatted = minute < 10 ? "0" + minute : minute,
        ampm = hour < 12 ? "am" : "pm";

  const time = hourFormatted + ':' + minuteFormatted  + ampm;

  return [date, time].join(' at ');

}

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: this.props.target,
      data: this.props.data,
      size: formatSize(this.props.data.currentFires.area.total),
      date: getDateString(this.props.data.currentFires.dateGenerated),
      isOpen: this.props.isOpen

    };
    this.toggleCard = this.toggleCard.bind(this);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.first !== prevProps.first)) {
      setTimeout(() => {
        this.setState({isOpen: this.props.isOpen});
      }, 0);

    }
  }

  toggleCard(){
    const isOpen = !this.state.isOpen;
    this.setState({isOpen});
  }

  render() {
    let target = this.state.target;
    return (
      <MDBCard id="statsCard">
        <MDBCardHeader>
          <span>{(target == "aggregate") ? "Both VIC & NSW"
          : this.state.target.toUpperCase()}</span>
          <button type="button" className="btn btn-circle btn-circle-sm m-1" id="collapseBtn" onClick={this.toggleCard.bind(this)}>
          {this.state.isOpen ? <i class="fa fa-chevron-up fa-sm" id="upIcon"></i>
            : <i class="fa fa-chevron-down fa-sm" id="downIcon"></i>}</button>
        </MDBCardHeader>
        {this.state.isOpen ?
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
          <div id="statsTimestamp">
            <span id="statsTimestamp">{"LAST UPDATED: " + this.state.date.toUpperCase()}</span>
          </div>
        </MDBCardBody>
        : null}
      </MDBCard>
    )
  }
}
