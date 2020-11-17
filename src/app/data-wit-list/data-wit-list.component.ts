import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-wit-list',
  templateUrl: './data-wit-list.component.html',
  styleUrls: ['./data-wit-list.component.scss']
})
export class DataWitListComponent implements OnInit {
  public witList = [
    { id: '0', label: 'Critical Text' },
    { id: 'V1', label: 'Vat.lat.1677' },
    { id: 'V2', label: 'Vat.lat.6043' },
    { id: 'F', label: 'Florence, Magl. Cl. VII, num. 1011' },
    { id: 'L', label: 'Lyon, MS 154' },
    { id: 'O', label: 'Oxford, Class. Lat. 81' },
    { id: 'P', label: 'Paris, MS 630' },
    { id: 'P3', label: 'Paris' },
    { id: 'Pa1', label: 'Parmense 337 (HH VIII 44)' },
    { id: 'Pa2', label: 'Parmense 1066 (HH III 99)' },
    { id: 'Pa3', label: 'Parmense 1076 (HH III 108)' },
    { id: 'R', label: 'Rimini, MS SC 67' },
    { id: 'Ro', label: 'Roma, 1338 (D III 24)' },
    { id: 'W', label: 'Wolfenbuttel,Guelf. 55 Weissenburg (Heinemann-Nr. 4139)' },
    { id: 'St', label: 'Print, Drudi 1794' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
