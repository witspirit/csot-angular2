/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatBubbleListComponent } from './chat-bubble-list.component';

describe('Component: ChatBubbleList', () => {
  it('should create an instance', () => {
    let component = new ChatBubbleListComponent();
    expect(component).toBeTruthy();
  });
});
