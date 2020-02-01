import { TestBed } from '@angular/core/testing';

import { BodyPartsService } from './body-parts.service';

describe('BodyPartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodyPartsService = TestBed.get(BodyPartsService);
    expect(service).toBeTruthy();
  });
});
