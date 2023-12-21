import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  public route = inject(ActivatedRoute)
  
    constructor() {
      this.route.params.subscribe((params) => {
        const id = params['id'];
        console.log(id);
      })
    }
}
