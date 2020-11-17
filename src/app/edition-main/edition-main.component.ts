import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-edition-main',
  templateUrl: './edition-main.component.html',
  styleUrls: ['./edition-main.component.scss']
})

export class EditionMainComponent implements OnInit {
  books = BOOKS;

  selectedBook: Book;

  constructor() { };

  ngOnInit(): void {
  }

}
