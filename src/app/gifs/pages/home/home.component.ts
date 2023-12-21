import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { SearchComponent } from '../../components/search/search.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    SearchComponent,
    RouterModule,
    DetailsComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}

  newValue: string = '';

  handleNewValue(value: string) {
    this.newValue = value;
  }
}
