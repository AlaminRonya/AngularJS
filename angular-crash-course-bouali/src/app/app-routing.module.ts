import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from './component/my-first-component/my-first-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: MyFirstComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
