import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdibroComponentsComponent } from './ngx-adibro-components.component';

describe('NgxAdibroComponentsComponent', () => {
  let component: NgxAdibroComponentsComponent;
  let fixture: ComponentFixture<NgxAdibroComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdibroComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdibroComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
