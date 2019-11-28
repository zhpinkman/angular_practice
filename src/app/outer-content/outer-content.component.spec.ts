import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterContentComponent } from './outer-content.component';

describe('OuterContentComponent', () => {
  let component: OuterContentComponent;
  let fixture: ComponentFixture<OuterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
