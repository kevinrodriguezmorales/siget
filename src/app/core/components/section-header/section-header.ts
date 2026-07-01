import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  imports: [ CommonModule ],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss'
})
export class SectionHeader {
  @Input() type: 'page' | 'section' | 'form' = 'section';
  @Input() forLabel: string = "";
}
