import { TestBed, inject } from '@angular/core/testing';

import { ProcedureDataService } from './procedure-data.service';

describe('ProcedureDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcedureDataService]
    });
  });

  it('should be created', inject([ProcedureDataService], (service: ProcedureDataService) => {
    expect(service).toBeTruthy();
  }));
});
