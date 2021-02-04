import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-files-list',
  templateUrl: './data-files-list.component.html',
  styleUrls: ['./data-files-list.component.scss']
})
export class DataFilesListComponent implements OnInit {
  public filesList = [
    { id: '0', label: 'General Info' },
    { id: '1', label: 'Critical Text' },
    { id: '2', label: 'Variants' },
    { id: '3', label: 'Author Variants' },
    { id: '4', label: 'Similia' },
    { id: '6', label: 'Commentary' },
    { id: '7', label: 'Translation' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}