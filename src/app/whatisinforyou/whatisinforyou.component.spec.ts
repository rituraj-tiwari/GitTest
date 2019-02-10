import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisinforyouComponent } from './whatisinforyou.component';

describe('WhatisinforyouComponent', () => {
  let component: WhatisinforyouComponent;
  let fixture: ComponentFixture<WhatisinforyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatisinforyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatisinforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
