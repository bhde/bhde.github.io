import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaEditionComponent } from './prova-edition.component';

describe('ProvaEditionComponent', () => {
  let component: ProvaEditionComponent;
  let fixture: ComponentFixture<ProvaEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
