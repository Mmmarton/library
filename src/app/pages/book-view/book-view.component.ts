import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '../../../../node_modules/@angular/router';

@Component({
  selector: 'book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  id: number;

  constructor(route: ActivatedRoute, router: Router) {
    this.id = route.snapshot.params['id'];
    if (this.id > 9 || this.id < 0) {
      router.navigate(['/books']);
    }
  }

  ngOnInit() {}
}
