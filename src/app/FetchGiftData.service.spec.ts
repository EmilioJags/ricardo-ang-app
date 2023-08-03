/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchGiftDataService } from './FetchGiftData.service';

describe('Service: FetchGiftData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchGiftDataService]
    });
  });

  it('should ...', inject([FetchGiftDataService], (service: FetchGiftDataService) => {
    expect(service).toBeTruthy();
  }));
});
