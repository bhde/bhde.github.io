import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBookListComponent } from './data-book-list.component';

describe('DataBookListComponent', () => {
  let component: DataBookListComponent;
  let fixture: ComponentFixture<DataBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
