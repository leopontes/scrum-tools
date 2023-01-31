import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { PokerComponent } from './pages/poker/poker.component';
import { CartaComponent } from './pages/poker/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokerComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
