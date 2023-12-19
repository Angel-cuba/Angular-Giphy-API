import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Datum } from '../../../interfaces/gif.interface';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

@Input() gif: Datum | undefined;

constructor() {}
}
