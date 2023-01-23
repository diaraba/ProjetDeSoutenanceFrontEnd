import { TestBed } from '@angular/core/testing';

import { ModifierprofilService } from './modifierprofil.service';

describe('ModifierprofilService', () => {
  let service: ModifierprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
