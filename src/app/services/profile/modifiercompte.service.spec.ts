import { TestBed } from '@angular/core/testing';

import { ModifiercompteService } from './modifiercompte.service';

describe('ModifiercompteService', () => {
  let service: ModifiercompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifiercompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
