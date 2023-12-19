import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, MatCardModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public gifService = inject(GifService);
  contructor() {}
}
