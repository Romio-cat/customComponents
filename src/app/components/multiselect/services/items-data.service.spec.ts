import { TestBed, inject } from '@angular/core/testing';

import { ItemsDataService } from './items-data.service';

describe('ItemsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsDataService]
    });
  });

  it('should be created', inject([ItemsDataService], (service: ItemsDataService) => {
    expect(service).toBeTruthy();
  }));
});
