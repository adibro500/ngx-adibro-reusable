import { NgModule } from '@angular/core';
import { NgxAdibroComponentsComponent } from './ngx-adibro-components.component';
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
  declarations: [NgxAdibroComponentsComponent, AutocompleteComponent],
  exports: [NgxAdibroComponentsComponent, AutocompleteComponent]
})
export class NgxAdibroComponentsModule { }
