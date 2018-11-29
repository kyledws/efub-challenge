import React, { Component } from 'react';
import LocaleContext from '../contexts/localeContext';
import { FormControl } from 'react-bootstrap';

/**
 * Represents a language/locale toggle. It only displays locale options.
 * Handling of switch locales is delegated to LocaleContext
 */
class LocaleSelector extends Component {
  handleChange(e) {
    this.context.updateLocale(e.target.value);
  }

  render() {
    return (
      <LocaleContext.Consumer>
        {(context) => (
          <FormControl
            componentClass="select"
            onChange={this.handleChange.bind(this)}
            value={context.getCurrentLocale()}>
            {context.getAvailableLocales().map(locale => (
              <option key={locale} value={locale}>{locale}</option>
            ))}
          </FormControl>
        )}
      </LocaleContext.Consumer>
    );
  }
}
LocaleSelector.contextType = LocaleContext;

export default LocaleSelector;