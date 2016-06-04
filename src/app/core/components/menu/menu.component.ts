import { Component, HostBinding, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component( {
  selector       : 'rcv-menu',
  template       : ``,
  styles         : [ require( './menu.scss' ) ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MenuComponent implements OnInit {
  @Input() isOpen: boolean;


  @HostBinding( 'class.open' ) get open() {return this.isOpen};

  ngOnInit() {}

}