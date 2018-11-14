import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxAdibroComponentsModule } from 'ngx-adibro-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxAdibroComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
