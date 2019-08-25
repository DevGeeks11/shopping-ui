import { TestBed } from '@angular/core/testing';

import { SignUpComponentService } from './sign-up-component.service';

describe('SignUpComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpComponentService = TestBed.get(SignUpComponentService);
    expect(service).toBeTruthy();
  });
});
