import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionReadTranslationComponent } from './edition-read-translation.component';

describe('EditionReadTranslationComponent', () => {
  let component: EditionReadTranslationComponent;
  let fixture: ComponentFixture<EditionReadTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionReadTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionReadTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
