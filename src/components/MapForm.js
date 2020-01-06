import React from "react";
import Select from 'react-select';
import {Form, FormGroup, Label, Button} from 'reactstrap';
import { CITIES, STATES } from '../enums'
import { customStylesCity, customStylesState} from './MapFormStyles.js'

const getCityOptions = () => {
  let cityOptions = []
  Object.keys(CITIES).map(key => cityOptions.push({
    value: key,
    label: CITIES[key].name
  }))
  console.log(JSON.stringify(cityOptions))
  return cityOptions;
};

const getStateOptions = () => {
  let stateOptions = []
  Object.keys(STATES).map(key => stateOptions.push({
    value: key,
    label: STATES[key].description
  }))
  console.log(JSON.stringify(stateOptions));
  return stateOptions;
};



export default class MapForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStateOption: {value: this.props.options.target.label, label: this.props.options.target.description},
      stateOptions: getStateOptions(),
      currentCityOption: {value: this.props.options.city.abr, label: this.props.options.city.name},
      cityOptions: getCityOptions()
    }
  }

  render() {
    return (
      <div>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Currently showing total area of current fires burning in: </Label>
          <Select id="stateSelect" options={this.state.stateOptions} onChange={(e) => {}} value={this.state.currentStateOption || ""} styles={customStylesState}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Over the city of:</Label>
          <Select id="citySelect" options={this.state.cityOptions} onChange={(e) => {}} value={this.state.currentCityOption || ""} styles={customStylesCity}/>
        </FormGroup>
      </Form>
    </div>



    )
  }
}
