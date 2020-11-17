import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';


@Component({
  selector: 'app-data-book-list',
  templateUrl: './data-book-list.component.html',
  styleUrls: ['./data-book-list.component.scss']
})
export class DataBookListComponent implements OnInit {
  books = BOOKS;

  selectedBook: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
