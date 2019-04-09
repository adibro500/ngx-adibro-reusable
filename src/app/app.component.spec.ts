import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from '../../projects/ngx-adibro-components/src/public_api';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AutocompleteComponent
      ],
      imports:[
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AutocompleteComponent),
          multi: true
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
