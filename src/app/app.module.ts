import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeComponent } from './three/three.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { FullOverlayComponent } from './full-overlay/full-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeComponent,
    FullScreenComponent,
    FullOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
