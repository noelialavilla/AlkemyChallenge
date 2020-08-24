import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent} from './admin.component';


@NgModule({
    declarations: [
      AdminComponent
    ],
    imports: [
      SharedModule,
      AdminRoutingModule
    ],
    providers: [],
    exports: [
    
    ]
    
  })
  export class AdminModule {
      constructor(){}
   }