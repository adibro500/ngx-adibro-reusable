import { TestBed } from '@angular/core/testing';

import { NgxAdibroComponentsService } from './ngx-adibro-components.service';

describe('NgxAdibroComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAdibroComponentsService = TestBed.get(NgxAdibroComponentsService);
    expect(service).toBeTruthy();
  });
});
