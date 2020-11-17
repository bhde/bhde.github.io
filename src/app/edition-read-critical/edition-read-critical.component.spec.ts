import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionReadCriticalComponent } from './edition-read-critical.component';

describe('EditionReadCriticalComponent', () => {
  let component: EditionReadCriticalComponent;
  let fixture: ComponentFixture<EditionReadCriticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionReadCriticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionReadCriticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
