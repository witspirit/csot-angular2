/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChatPageComponent } from './chat-page.component';

describe('Component: ChatPage', () => {
  it('should create an instance', () => {
    let component = new ChatPageComponent();
    expect(component).toBeTruthy();
  });
});
