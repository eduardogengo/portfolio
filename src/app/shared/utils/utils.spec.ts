import { TestBed } from '@angular/core/testing';

import { Utils } from './utils';

describe('Utils', () => {
  let service: Utils;

  const mockUrl = 'https://teste.com/';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Utils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run redireciona', () => {
    expect(service.redireciona(mockUrl)).toBeUndefined();
  });

});
