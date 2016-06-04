import { Component, ComponentMetadata, Input, Output, EventEmitter } from '@angular/core';

const NavMetadata: ComponentMetadata = new ComponentMetadata( {
  selector: 'epub-nav',
  styles  : [ require( './nav.scss' ) ],
  template: `
    <div layout="row" layout-align="space-between stretch" class="nav-wrapper">
        <button md-button (click)="toggleMenu.emit()" layout="row" layout-align="center" class="menu-toggle-button"
                [class.open]="menuOpen">
            <div layout layout-align="center center" class="inner">
                <md-icon class="menu-icon">menu</md-icon>
                <img [attr.src]="logoSrc" class="logo">
            </div>
        </button>
        <div layout="row" layout-align="end center">
            <div md-button style="margin-right:-23px; font-family: Montserrat; font-size: 20px;">
                <span>4.2</span><span style=" font-size: 0.65em">k</span>
            </div>
            <md-icon svgSrc="/assets/img/spinner.svg" class="user-avatar"></md-icon>
        </div>
    </div>
  `
} );
@Component( NavMetadata )
export class NavComponent {
  @Input() menuOpen: boolean;
  @Output() toggleMenu = new EventEmitter();

  constructor() {}

  private get logoSrc(): string {
    return this.menuOpen ? '/assets/img/logo-dark.png' : '/assets/img/logo-light.png';
  }

}
