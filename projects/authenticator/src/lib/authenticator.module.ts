import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [      
    BaseComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [   
    BaseComponent 
  ],
  providers:[    
  ]
})
export class AuthenticatorModule { }
