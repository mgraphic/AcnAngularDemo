import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CasesComponent } from './cases.component';
import { CaseService } from './case.service';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
