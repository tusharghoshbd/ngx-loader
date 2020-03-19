import { TestBed } from '@angular/core/testing';

import { NgxLoaderService } from './ngx-loader.service';

describe('NgxLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLoaderService = TestBed.get(NgxLoaderService);
    expect(service).toBeTruthy();
  });
});
