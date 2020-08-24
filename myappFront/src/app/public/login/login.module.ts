import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';
import { LoginComponent} from './components/login/login.component';
import { LoginRoutingModule} from './login-routing.module';

import { CommonModule } from '@angular/common';  
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent

    ],
    imports: [
      SharedModule,
      LoginRoutingModule,
      CommonModule
    ],
    providers: [],
    exports: [
      LoginComponent,
      RegisterComponent
    ]
    
  })
  export class LoginModule {
      constructor(){}
   }