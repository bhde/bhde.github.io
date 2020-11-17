import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFilesListComponent } from './data-files-list.component';

describe('DataFilesListComponent', () => {
  let component: DataFilesListComponent;
  let fixture: ComponentFixture<DataFilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
