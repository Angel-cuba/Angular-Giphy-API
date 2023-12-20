import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { MatCardModule } from '@angular/material/card';
import { delay } from 'rxjs';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, MatCardModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() value: string = '';
  public gifService = inject(GifService);
  contructor() {
  }
  ngOnChanges():void {
    let defaultValue: string = 'messi'
    this.gifService.getGifs(this.value || defaultValue);
  }

 
}
