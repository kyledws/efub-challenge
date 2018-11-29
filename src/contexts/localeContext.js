import React from 'react';

/**
 * Represents a Localaztion Context that components can use to get
 * localized resouces and to change the locale of those resources
 * See https://reactjs.org/docs/context.html for more info on contexts
 */
class LocaleContextModel {
  constructor(locale, updateMethod) {
    this._availableLocales = ['de-DE', 'en-US', 'it-IT'];
    this._currentLocale = locale;
    this._updateMethod = updateMethod;
    this.resources = require(`../locales/${locale}.json`);
  }

  getAvailableLocales () {
    return this._availableLocales;
  }

  getCurrentLocale() {
    return this._currentLocale;
  }

  updateLocale(locale) {
    this._currentLocale = locale;
    this.resources = require(`../locales/${locale}.json`);
    this._updateMethod(locale);
  }
}

export { LocaleContextModel };
export default React.createContext(new LocaleContextModel('en-US', () => undefined));