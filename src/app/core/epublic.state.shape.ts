import { Store } from '@ngrx/store';
import { CoreUIState } from './models/core.ui.state';

export type EpublicState = {
  core_ui: CoreUIState
}


export type EpublicStore = Store<EpublicState>;
