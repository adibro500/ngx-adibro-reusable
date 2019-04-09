import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      declarations: [ AutocompleteComponent ],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AutocompleteComponent),
          multi: true
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.items = ['aoa', 'mom', 'non'];
  });

  it('test case 0: should create', () => {
    expect(component).toBeTruthy();
  });

  it('test case 1: should suggest a list on change', () => {
    let elmtValue = fixture.nativeElement.querySelector('input');
    const event = new KeyboardEvent('change', {
      bubbles : true, cancelable : true, shiftKey : false
    });
    elmtValue.value = 'a';
    elmtValue.dispatchEvent(event);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.float-div').innerHTML).toBeDefined();
  })

  it('test case 2: should suggest a list on focus', () => {
    let elmtValue = fixture.nativeElement.querySelector('input');
    const event = new KeyboardEvent('focus', {
      bubbles : true, cancelable : true, shiftKey : false
    });
    elmtValue.value = 'm';
    elmtValue.dispatchEvent(event);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.float-div').innerHTML).toBeDefined();
  })

  it('test case 3: should suggest a list on keyup', () => {
    let elmtValue = fixture.nativeElement.querySelector('input');
    const event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false
    });
    elmtValue.value = 'n';
    elmtValue.dispatchEvent(event);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.float-div').innerHTML).toBeDefined();
  })
});
