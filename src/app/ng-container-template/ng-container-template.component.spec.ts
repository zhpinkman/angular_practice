import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerTemplateComponent } from './ng-container-template.component';

describe('NgContainerTemplateComponent', () => {
  let component: NgContainerTemplateComponent;
  let fixture: ComponentFixture<NgContainerTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContainerTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
