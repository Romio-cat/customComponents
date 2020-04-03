import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component {
  @Input() tabTitle: string;
  @Input() active: boolean;
}
