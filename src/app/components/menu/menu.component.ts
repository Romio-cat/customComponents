import { Component } from '@angular/core';
import { PathConfig } from '../../config/path.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuItems: string[] = [
    PathConfig.PROCEDURES,
    PathConfig.SLIDER,
    PathConfig.MULTISELECT,
    PathConfig.MASKINPUT,
    PathConfig.ORGANIZER,
    PathConfig.ASTERISK,
    PathConfig.DYNAMIC_TABS,
  ];
}
