import { TestBed } from '@angular/core/testing';

import { SidebarControlsService } from './sidebar-controls.service';

describe('SidebarControlsService', () => {
  let service: SidebarControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
