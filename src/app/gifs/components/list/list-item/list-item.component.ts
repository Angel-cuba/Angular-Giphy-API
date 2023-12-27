import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Datum } from '../../../interfaces/gif.interface';
import { RouterModule, Router } from '@angular/router';
import { GifService } from '../../../services/gif.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input() gif: Datum | undefined;
  @Input() value: string = '';

  public service = inject(GifService);

  constructor(private router: Router) {}

  navigateToDetails(id: string) {
    let defaultValue: string = 'messi';
    let value = this.value;
    let gif = this.service.getGifById(id, value ? value : defaultValue);
    this.router.navigate(['/details', { state: { gif } }]);
  }
}
