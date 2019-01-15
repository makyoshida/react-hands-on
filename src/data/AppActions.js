'use strict';

import AppActionTypes from './AppActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
  changeEditorText(text) {
    AppDispatcher.dispatch({
      type: AppActionTypes.CHANGE_EDITOR_TEXT,
      text,
    });
  },
};

export default Actions;

