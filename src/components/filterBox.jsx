import React, { Component } from 'react'
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import LocaleContext from '../contexts/localeContext'
import reduce from 'lodash.reduce'

/**
 * Represents a filtering mechanism. It is abstracted from
 * the component consuming the filter data so that this component can
 * be reused for any representation of data: grids, tables, lists
 */
class FilterBox extends Component {
  constructor(props) {
    super(props);
    let fieldValues = {};
    for (let field of props.fields) {
      fieldValues[field] = '';
    }
    this.state = {
      exclusive: false,
      fieldValues
    }
  }

  /**
   * Manages the state of the form fields and this components internal state
   * 
   * @param {Event} e 
   */
  handleFieldChange(e) {
    let target = e.target;
    let fieldValues = {...this.state.fieldValues};
    fieldValues[target.name] = target.value;
    this.setState({fieldValues});
  }

  /**
   * Manages the state of the filter toggle which determines how content is filtered
   * 
   * @param {Event} e 
   */
  handleFormChange(e) {
    this.setState({
      exclusive: e.target.value
    })
  }

  /**
   * Handles the submission of the form. It passes filter data up to parent
   * component via a callback set a prop
   * 
   * @param {Event} e 
   */
  handleSubmit(e) {
    e.preventDefault();
    let filterProps = reduce(this.state.fieldValues, (acc, value, key) => {
      if (value.length > 0) {
        acc[key] = value;
      }
      return acc;
    }, {});
    this.props.onSubmit(filterProps, this.state.exclusive);
  }

  /**
   * Handles the clearing for the form and passes that the updated status
   * to the parent component via a callback
   */
  handleClear() {
    let fieldValues = {};
    for (let field of this.props.fields) {
      fieldValues[field] = '';
    }
    this.setState({
      exclusive: false,
      fieldValues
    })
    this.props.onSubmit({}, this.state.exclusive);
  }

  render() {
    let style = {
      columns: 3,
      margin: '1.5em 0'
    }
    return (
      <LocaleContext.Consumer>
        {({resources}) => (
          <form onSubmit={this.handleSubmit.bind(this)} style={style}>
            {this.props.fields.map((field) => (
              <FilterField
                field={field}
                key={field}
                label={resources[field]} 
                onChange={this.handleFieldChange.bind(this)}
                value={this.state.fieldValues[field]} />
            ))}
            <FormGroup>
              <ControlLabel>{resources.filterType}</ControlLabel>
              <FormControl componentClass="select" onChange={this.handleFormChange.bind(this)} disabled>
                <option value={false}>{resources.matchAny}</option>
                <option value={true}>{resources.matchAll}</option>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel style={{display: 'block'}}>&nbsp;</ControlLabel>
              <Button onClick={this.handleClear.bind(this)}>{resources.clear}</Button> &nbsp;
              <Button bsStyle="primary" type="submit">{resources.filter}</Button>
            </FormGroup>
          </form>
        )}
      </LocaleContext.Consumer>
    )
  }
}

/**
 * Private component used in FilterBox. Represents a field that a component
 * consuming FilterBox would want data on
 * @param {*} param0 
 */
function FilterField({field, label, onChange, value}) {
  return (
    <FormGroup controlId={field} style={{breakInside: 'avoid'}}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl name={field} onChange={onChange} type="text" value={value}></FormControl>
    </FormGroup> 
  )
}

export default FilterBox;