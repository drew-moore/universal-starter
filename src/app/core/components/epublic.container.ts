import { Component, ViewEncapsulation } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';


import '../../../assets/style/material-layout.css';
import { Store } from '@ngrx/store';
import { mutable } from '../../common/mutability';
import { EpublicStore } from '../epublic.state.shape';
import { CoreUIState } from '../models/core.ui.state';


@Component( {
  selector  : 'epublic',
  directives: [ NavComponent, MenuComponent ],
  styles    : [ require( './epublic.scss' ) ],
  encapsulation: ViewEncapsulation.None,
  template  : `
    <md-content layout="column" class="app-wrapper" layout-fill>
       <epub-nav [menuOpen]="state.menuOpen$ | async" (toggleMenu)="state.toggleMenu()" class="nav"></epub-nav>
        <div layout="row" layout-align="start stretch" class="nav-filler" flex>
          <rcv-menu [isOpen]="state.menuOpen$ | async"></rcv-menu>
          <route-view></route-view>
        </div>  
     </md-content>
  `
} )
export class EpublicContainer {

  constructor( private state: CoreUIState, private _store: EpublicStore ) {

    this._store.subscribe(x => {
      console.log( "EPUB STATE:" );
      console.log( mutable(x) );
    })

  }

}
