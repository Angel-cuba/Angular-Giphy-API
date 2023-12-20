import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor() {}

newValue: string = '';

handleNewValue(value: string) {
  this.newValue = value;
}

}
