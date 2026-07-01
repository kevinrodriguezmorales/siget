import { Component, Input } from '@angular/core';

@Component({
  selector: 'information-container',
  imports: [],
  templateUrl: './information-container.html',
  styleUrls: ['./information-container.scss', '../../../../assets/styles/_buttons.scss']
})
export class InformationContainer {
  @Input() icon: string = "";
  @Input() title: string = "";
}
