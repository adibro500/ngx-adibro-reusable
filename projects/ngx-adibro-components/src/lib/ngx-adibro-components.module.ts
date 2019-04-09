import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ AutocompleteComponent],
  exports: [ AutocompleteComponent]
})
export class NgxAdibroComponentsModule { }
