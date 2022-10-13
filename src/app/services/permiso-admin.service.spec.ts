import { TestBed } from '@angular/core/testing';

import { PermisoAdminService } from './permiso-admin.service';

describe('PermisoAdminService', () => {
  let service: PermisoAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisoAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
