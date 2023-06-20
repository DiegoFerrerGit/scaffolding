import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path:'login',
    loadComponent: () => import('@pages/sign-in/sign-in.page').then(component => component.SignInComponent)
  },
  {
    path:'register',
    loadComponent: () => import('@pages/sign-up/sign-up.page').then(component => component.SignUpComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
