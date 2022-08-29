import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TelaLoginComponent } from './tela-login.component';

describe('TelaLoginComponent', () => {
  let component: TelaLoginComponent;
  let fixture: ComponentFixture<TelaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TelaLoginComponent]
    });
    fixture = TestBed.createComponent(TelaLoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
