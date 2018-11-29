import React, { Component } from 'react';
import LocaleContext from '../contexts/localeContext'
import ModalContext from '../contexts/modalContext';
import FilterBox from './filterBox';
import UserCard from './userCard';
import orderBy from 'lodash.orderby'
import reduce from 'lodash.reduce'
import {Col, Grid, Row, Table} from 'react-bootstrap';

class UserListing extends Component {
  state = {
    fields: ['name', 'surname', 'gender', 'region', 'email', 'password', 'phone'],
    sortKey: 'name',
    sortOrder: 'asc',
    userData: [],
    visibleUserData: []
  }

  /**
   * Handle sorting of user data
   * 
   * @param {string} key - Key to sort the user data on
   */
  handleSort(key) {
    let order = this.state.sortOrder;

    if (key === this.state.sortKey) {
      order = order === 'asc' ? 'desc' : 'asc';
    }

    this.setState({
      sortKey: key,
      sortOrder: order
    })
  }

  /**
   * Handles filtering of user data.
   * 
   * TODO: The all/any mechanism is bugged. It broke when I started using react-bootstrap
   * 
   * @param {Array} values - Values user data should be filter against
   * @param {Boolean} exclusive - Should user data match all filterd data
   */
  handleFilter(values, exclusive) {
    let userData = null;
    if (Object.keys(values).length > 0) {
      const andReducer = function (acc, value, key) {
        return acc && (this[key].toUpperCase().indexOf(value.toUpperCase()) > -1);
      };
      const orReducer = function (acc, value, key) {
        return acc || (this[key].toUpperCase().indexOf(value.toUpperCase()) > -1);
      };
      const reducer = exclusive ? andReducer : orReducer;
      userData = this.state.userData.filter((user) => {
        return reduce(values, reducer.bind(user), exclusive);
      })
    } else {
      userData = this.state.userData;
    }
    this.setState({visibleUserData: userData})
  }

  componentDidMount() {
    this.loadUserData();
  }

  /**
   * Loads user data. Source is provided as a prop
   */
  async loadUserData() {
    let res = await fetch(this.props.source)
    if (res.status === 200) {
      let userData = await res.json();
      this.setState({userData, visibleUserData: userData})
    }
  }

  render() {
    const { fields, sortKey, sortOrder, visibleUserData } = this.state;
    return (
      <Grid>
        <Row>
          <Col sm={10} smOffset={1}>
            <FilterBox fields={fields} onSubmit={this.handleFilter.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered hover responsive striped>
              <TableHead fields={fields} onSort={this.handleSort.bind(this)} />
              <TableBody fields={fields} sortKey={sortKey} sortOrder={sortOrder} users={visibleUserData} />
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

/**
 * Private component that represents the heading of the user listing
 * Enables sorting but the logic is delegated to the parent component
 */
class TableHead extends Component {
  handleCellClick(e) {
    this.props.onSort(e.target.dataset.key);
  }

  render() {
    return (
      <LocaleContext.Consumer>
        {({resources}) => (
            <thead>
              <tr onClick={this.handleCellClick.bind(this)}>
                {this.props.fields.map(field => (
                  <th
                    className="mdl-data-table__cell--non-numeric" 
                    data-key={field}
                    key={field}>{resources[field]}</th>
                ))}
              </tr>
            </thead>
          )}
      </LocaleContext.Consumer>
    );
  }
}

/**
 * Private component that represents all users in user listing
 */
class TableBody extends Component {
  render() {
    const sortedUsers = orderBy(this.props.users, this.props.sortKey, this.props.sortOrder);
    return (
      <tbody>
        {sortedUsers.map(user => {
          return <TableBodyRow fields={this.props.fields} key={user.email} user={user} />
        })}
      </tbody>
    );
  }
}

/**
 * Private component that represents a single user in the user listing
 */
class TableBodyRow extends Component {
  handleRowClick() {
    this.context.showModal(<UserCard user={this.props.user} />)
  }

  render() {
    const user = this.props.user;
    return (
      <tr onClick={this.handleRowClick.bind(this)}>
        {this.props.fields.map(field => (
          <td
            className="mdl-data-table__cell--non-numeric"
            key={field}>{user[field]}</td>
        ))}
      </tr>
    );
  }
}
TableBodyRow.contextType = ModalContext;

export default UserListing;