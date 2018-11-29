import React, { Component } from 'react';
import LocaleContext from './contexts/localeContext';
import LocalizedApplication from './components/localizedApplication';
import ModalizedApplication  from './components/modalizedApplication';
import LocaleSwitcher from './components/localeSwitcher';
import UserListing from './components/userListing';
import { Navbar } from 'react-bootstrap';

/**
 * This class represents the solution to the challenge prompt.
 * Global logic such as localization and modal usage were extracted
 * into their own components. The nav bar and was implemented directly 
 * due to time constraint.
 */
class App extends Component {
  render() {
    return (
      <LocalizedApplication defaultLocale="en-US">
        <ModalizedApplication>
          <LocaleContext.Consumer>
            {({resources}) => (
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    {resources.customerPanel}
                  </Navbar.Brand>
                </Navbar.Header>
                <div className="navbar-right" style={{padding: '8px'}}>
                  <LocaleSwitcher /> 
                </div>
              </Navbar>
            )}
          </LocaleContext.Consumer>
          <UserListing source="https://uinames.com/api/?ext&amount=100"/>
        </ModalizedApplication>
      </LocalizedApplication>
    );
  }
}

export default App;