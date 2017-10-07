import { TestBed, inject } from '@angular/core/testing';

import { TodoDataStoringService } from './todo-data-storing.service';

describe('TodoDataStoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataStoringService]
    });
  });

  it('should be created', inject([TodoDataStoringService], (service: TodoDataStoringService) => {
    expect(service).toBeTruthy();
  }));
});
