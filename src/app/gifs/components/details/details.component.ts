import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  public service = inject(GifService);

  constructor() {}
}
