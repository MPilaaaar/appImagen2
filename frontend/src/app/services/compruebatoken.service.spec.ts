import { TestBed } from '@angular/core/testing';

import { CompruebatokenService } from './compruebatoken.service';

describe('CompruebatokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompruebatokenService = TestBed.get(CompruebatokenService);
    expect(service).toBeTruthy();
  });
});
