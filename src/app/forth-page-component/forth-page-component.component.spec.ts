import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthPageComponentComponent } from './forth-page-component.component';

describe('ForthPageComponentComponent', () => {
  let component: ForthPageComponentComponent;
  let fixture: ComponentFixture<ForthPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});