import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

type search = string | any;
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() searchValue = new EventEmitter<string>();
  constructor(private form: FormBuilder) {}

  public searchForm = this.form.group({
    search: [''],
  });

  searching() {
    const { search }: search = this.searchForm.value;
    this.searchValue.emit(search);
  }
}
