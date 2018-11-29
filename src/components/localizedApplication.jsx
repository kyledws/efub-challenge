import React, { Component } from 'react';
import LocaleContext, { LocaleContextModel } from '../contexts/localeContext';

/**
 * Represents an application that can be localized. Child components
 * can get localized resources from LocaleContext and similarly
 * can change the local of the application using LocaleContext
 */
class LocalizedApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: props.defaultLocale
    }
  }

  updateLocale(locale) {
    this.setState({locale})
  }

  render() {
    return (
      <LocaleContext.Provider value={new LocaleContextModel(this.state.locale, this.updateLocale.bind(this))}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocalizedApplication;