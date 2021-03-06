import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';
import { UsersRoutingModule} from './users-routing.module';
import { UsersListComponent } from './containers/users-list/users-list.component';

@NgModule({
    declarations: [
        UsersListComponent

    ],
    imports: [
      SharedModule,
      UsersRoutingModule
    ],
    providers: [],
    exports: [
    
    ]
    
  })
  export class UsersModule {
      constructor(){}
   }