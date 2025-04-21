import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcpAlertModule, BcpButtonModule, BcpIconModule } from '@bcp/ng-ui-components';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BcpButtonModule,
    BcpIconModule,
    BcpAlertModule
  ],
  exports:[
    BcpButtonModule,
    BcpIconModule,
    BcpAlertModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BcpuiModule { }
