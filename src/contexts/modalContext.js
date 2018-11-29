import React from 'react';

/**
 * Represents a Modal Context that components can use to show content in a modal
 * See https://reactjs.org/docs/context.html for more info on contexts
 */
class ModalContextModel {
  constructor(renderMethod) {
    this._renderMethod = renderMethod;
  }

  showModal(children) {
    this._renderMethod(children);
  }
}

export { ModalContextModel };
export default React.createContext(new ModalContextModel(() => undefined));