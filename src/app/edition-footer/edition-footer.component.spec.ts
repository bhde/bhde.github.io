import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionFooterComponent } from './edition-footer.component';

describe('EditionFooterComponent', () => {
  let component: EditionFooterComponent;
  let fixture: ComponentFixture<EditionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
