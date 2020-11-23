import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-prova-edition',
  templateUrl: './prova-edition.component.html',
  styleUrls: ['./prova-edition.component.scss']
})
export class ProvaEditionComponent implements OnInit {

  books = BOOKS;

  selectedBook: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  public loadComponent = false;
  loadMyChildComponent(){
     this.loadComponent = true;
  }
}
