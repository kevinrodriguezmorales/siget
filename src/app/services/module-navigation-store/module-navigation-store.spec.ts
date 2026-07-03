import { TestBed } from '@angular/core/testing';
import { ModuleNavigation } from '../../core/components/module-navigation/module-navigation';


describe('ModuleNavigation', () => {
  let service: ModuleNavigation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleNavigation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
