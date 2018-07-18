import { BookPreview } from './../models/books';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() preview: BookPreview;

  constructor() {}

  ngOnInit() {}
}
