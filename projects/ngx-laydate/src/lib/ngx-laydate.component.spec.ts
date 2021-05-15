import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLaydateComponent } from './ngx-laydate.component';

describe('NgxLaydateComponent', () => {
  let component: NgxLaydateComponent;
  let fixture: ComponentFixture<NgxLaydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLaydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLaydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
