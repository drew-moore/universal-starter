import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CoreActions {

  static MENU_TOGGLED = "MENU_TOGGLED";
  public menuToggled(): Action {
    return {
      type   : CoreActions.MENU_TOGGLED
    }
  }
  
  
  
  
  
}
