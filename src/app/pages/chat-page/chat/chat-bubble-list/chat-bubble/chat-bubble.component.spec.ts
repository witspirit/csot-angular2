/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatBubbleComponent } from './chat-bubble.component';

describe('Component: ChatBubble', () => {
  it('should create an instance', () => {
    let component = new ChatBubbleComponent();
    expect(component).toBeTruthy();
  });
});
