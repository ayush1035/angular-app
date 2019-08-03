import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/commonComponents/header/header.component';
import { DialogComponent } from './core/commonComponents/dialog/dialog.component';
import { FooterComponent } from './core/commonComponents/footer/footer.component';
import { DialogService } from './core/commonComponents/dialog/dialog.service';
import { FormComponent } from './core/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [DialogComponent],

  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
