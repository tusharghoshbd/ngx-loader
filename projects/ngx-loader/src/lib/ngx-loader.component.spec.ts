import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoaderComponent } from './ngx-loader.component';

describe('NgxLoaderComponent', () => {
  let component: NgxLoaderComponent;
  let fixture: ComponentFixture<NgxLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
