import { TestBed } from '@angular/core/testing';

import { SubmenuStore } from './submenu-store';

describe('SubmenuStore', () => {
  let service: SubmenuStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmenuStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
