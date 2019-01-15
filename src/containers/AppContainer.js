'use strict';

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import AppStore from '../data/AppStore';

const getStores = () => {
  return [
    AppStore
  ];
};

const getState = () => {
  return {
    app: AppStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);

