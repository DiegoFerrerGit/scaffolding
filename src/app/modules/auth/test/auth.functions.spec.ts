import { TestBed } from '@angular/core/testing';

import { AuthFunctions } from '../auth.functions';

describe('AuthFunctions', () => {
  let service: AuthFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFunctions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
