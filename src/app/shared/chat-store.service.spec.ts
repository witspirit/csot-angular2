/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ChatStoreService } from './chat-store.service';

describe('ChatStore Service', () => {
  beforeEachProviders(() => [ChatStoreService]);

  it('should ...',
      inject([ChatStoreService], (service: ChatStoreService) => {
    expect(service).toBeTruthy();
  }));
});
