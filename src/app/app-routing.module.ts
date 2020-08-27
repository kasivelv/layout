import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import {DumComponent } from './dum/dum.component'


export const routes: Routes = [
      {
        path: 'dum',
        component: DumComponent,
        // children:[
        //   {
        //     path: '',
        //     component: LoginComponent,
        //   },
        //   {
        //     path: 'login',
        //     component: LoginComponent,
        //   },
        //   {
        //     path: 'register',
        //     component: RegisterComponent,
        //   },
        // ]
      },
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
   
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
