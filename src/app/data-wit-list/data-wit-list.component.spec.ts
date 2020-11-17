import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWitListComponent } from './data-wit-list.component';

describe('DataWitListComponent', () => {
  let component: DataWitListComponent;
  let fixture: ComponentFixture<DataWitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataWitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataWitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
