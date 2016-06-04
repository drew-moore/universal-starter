
import { CoreActions } from './actions/core.actions';
import { CoreStateService } from './services/core.ui.service';
import { EpublicContainer } from './components/epublic.container';
import { core_ui } from './reducers/core.ui.reducer';

export {
  CoreStateService, CoreActions, EpublicContainer, core_ui  
}


export const CORE_PROVIDERS = [
  CoreActions, CoreStateService
];
