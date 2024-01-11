import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoHumanoComponent } from './cuerpo-humano/cuerpo-humano.component';

const routes: Routes = [
  {
    path: '',
    component:CuerpoHumanoComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
