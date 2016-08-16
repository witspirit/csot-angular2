/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';

describe('Component: TextInput', () => {
  it('should create an instance', () => {
    let component = new TextInputComponent();
    expect(component).toBeTruthy();
  });
});
