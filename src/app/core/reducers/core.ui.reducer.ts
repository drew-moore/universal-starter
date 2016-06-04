import { ActionReducer, Action } from '@ngrx/store';
import * as SI from 'seamless-immutable';
import { CoreActions } from '../actions/core.actions';
import { CoreUIState } from '../models/core.ui.state';

let initVal: CoreUIState & Immutable.ObjectMethods<CoreUIState> = SI<CoreUIState>( { menuOpen: false } );

export const core_ui: ActionReducer<CoreUIState & Immutable.ObjectMethods<CoreUIState>> = (curr = initVal, action: Action) => {

  switch (action.type) {
    case CoreActions.MENU_TOGGLED:
      return curr.set( 'menuOpen', !curr.menuOpen );

    default:
      return curr;
  }

};
