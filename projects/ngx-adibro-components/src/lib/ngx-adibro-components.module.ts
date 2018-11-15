import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ AutocompleteComponent, PopupComponent],
  exports: [ AutocompleteComponent]
})
export class NgxAdibroComponentsModule { }
