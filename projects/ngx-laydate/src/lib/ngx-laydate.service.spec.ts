import { TestBed } from '@angular/core/testing';

import { NgxLaydateService } from './ngx-laydate.service';

describe('NgxLaydateService', () => {
  let service: NgxLaydateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLaydateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
