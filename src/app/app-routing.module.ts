import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThreeComponent} from './three/three.component';
import {FullScreenComponent} from './full-screen/full-screen.component';
import {FullOverlayComponent} from './full-overlay/full-overlay.component';

const routes: Routes = [
  { path: 'three', component: ThreeComponent },
  { path: 'full', component: FullScreenComponent },
  { path: 'overlay', component: FullOverlayComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
