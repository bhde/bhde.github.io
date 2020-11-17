import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionMainComponent } from './edition-main.component';

describe('EditionMainComponent', () => {
  let component: EditionMainComponent;
  let fixture: ComponentFixture<EditionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
