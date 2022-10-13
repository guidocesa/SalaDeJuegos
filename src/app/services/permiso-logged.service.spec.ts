import { TestBed } from '@angular/core/testing';

import { PermisoLoggedService } from './permiso-logged.service';

describe('PermisoLoggedService', () => {
  let service: PermisoLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisoLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
