import { Component, OnInit } from '@angular/core';
import { BookPreview } from '../../models/books';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookPreviews: BookPreview[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      const preview = new BookPreview();
      preview.id = i;
      preview.author = 'Alfred L. Howes';
      preview.title = 'Dachau';
      preview.description =
        'The person listed as an author of the pamphlet is called "compositor"' +
        " in the list of credits at the end. I'm not sure if that makes him an author. An editor, maybe? ";
      preview.imageUrl = '../../assets/cover.jpeg';
      this.bookPreviews.push(preview);
    }
  }
}
