import { TestBed } from '@angular/core/testing';

import { MailtoService } from './mailto.service';

describe('MailtoService', () => {
  let service: MailtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
