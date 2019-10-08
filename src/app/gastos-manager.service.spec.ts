import { TestBed } from '@angular/core/testing';

import { GastosManagerService } from './gastos-manager.service';

describe('GastosManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GastosManagerService = TestBed.get(GastosManagerService);
    expect(service).toBeTruthy();
  });
});
