import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaBookReaderComponent } from './prova-book-reader.component';

describe('ProvaBookReaderComponent', () => {
  let component: ProvaBookReaderComponent;
  let fixture: ComponentFixture<ProvaBookReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaBookReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaBookReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
