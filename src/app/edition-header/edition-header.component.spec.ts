import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionHeaderComponent } from './edition-header.component';

describe('EditionHeaderComponent', () => {
  let component: EditionHeaderComponent;
  let fixture: ComponentFixture<EditionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
