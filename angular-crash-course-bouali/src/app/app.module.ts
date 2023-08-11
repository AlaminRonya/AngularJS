import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './component/my-first-component/my-first-component.component';
import { MenuComponent } from './component/menu/menu.component';
import { MessageDetailsComponent } from './component/message-details/message-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MenuComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
