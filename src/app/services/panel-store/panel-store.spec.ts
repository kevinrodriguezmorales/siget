import { TestBed } from '@angular/core/testing';

import { PanelStore } from './panel-store';

describe('PanelStore', () => {
  let service: PanelStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
