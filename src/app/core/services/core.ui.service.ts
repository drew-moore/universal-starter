import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import { EpublicState } from '../epublic.state.shape';
import { CoreActions } from '../actions/core.actions';
import { CoreUIState } from '../models/core.ui.state';

@Injectable()
export class CoreStateService {
  public menuOpen$: Observable<boolean>;

  private _menuToggles$: Subject<any> = BehaviorSubject.create();

  constructor( private _store: Store<EpublicState>, private actions: CoreActions ) {

    const state$: Observable<CoreUIState> = _store.select<CoreUIState>( 'core_ui' );

    this.menuOpen$ = state$.map( state => {
      return state.menuOpen;
    } );

    this._menuToggles$.subscribe( () => this._store.dispatch( actions.menuToggled() ) )

  }

  public toggleMenu() {
    this._menuToggles$.next( null );
  }

}
