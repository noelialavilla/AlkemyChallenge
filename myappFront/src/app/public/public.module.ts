import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from '../public/public.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
    declarations: [
      PublicComponent

    ],
    imports: [
      SharedModule,
      PublicRoutingModule    
    ],
    providers: [],
    exports: [
    
    ]
    
  })
  export class PublicModule {
      constructor(){}
   }