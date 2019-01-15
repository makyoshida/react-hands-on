'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';
import AppCounter from './AppCounter';
import Text from './Text';

class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.CHANGE_EDITOR_TEXT:
        return state.set("text", action.text);

      default:
        return state;
    }
  }
}

export default new AppStore();

