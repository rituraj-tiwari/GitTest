import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPageComponentComponent } from './third-page-component.component';

describe('ThirdPageComponentComponent', () => {
  let component: ThirdPageComponentComponent;
  let fixture: ComponentFixture<ThirdPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
