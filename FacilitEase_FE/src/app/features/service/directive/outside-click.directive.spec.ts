import { OutsideClickDirective } from './outside-click.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('OutsideClickDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef; // Mock the ElementRef

    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: elementRefMock }],
    });

    const directive = new OutsideClickDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
