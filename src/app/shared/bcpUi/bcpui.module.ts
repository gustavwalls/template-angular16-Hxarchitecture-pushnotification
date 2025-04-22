import { NgModule } from '@angular/core';
import { BcpAlertModule, BcpButtonModule, BcpIconModule, BcpInputModule } from '@bcp/ng-ui-components';
@NgModule({
  declarations: [],
  imports: [
    BcpButtonModule,
    BcpIconModule,
    BcpAlertModule,
    BcpInputModule 
  ],
  exports:[
    BcpButtonModule,
    BcpIconModule,
    BcpAlertModule,
    BcpInputModule 
  ],
})
export class BcpuiModule { }
