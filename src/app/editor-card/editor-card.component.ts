import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-editor-card',
  templateUrl: './editor-card.component.html',
  styleUrls: ['./editor-card.component.scss']
})
export class EditorCardComponent implements OnInit {
  @Input() book: Book;


  constructor() { }

  ngOnInit(): void {
  }

}
