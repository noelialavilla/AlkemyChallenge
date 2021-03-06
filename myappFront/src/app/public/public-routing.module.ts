import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { RegisterComponent } from './login/components/register/register.component';



const routes: Routes = [
  { path: '', component: PublicComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', loadChildren:() => import('./login/login.module').then( m => m.LoginModule)},
    { path: 'register', component: RegisterComponent},
  ]}
]
  
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
