import { NgModule } from '@angular/core';
import {
    BcpAlertModule,
    BcpButtonModule,
    BcpIconModule,
    BcpInputModule,
    BcpSelectInputModule,
} from '@bcp/ng-ui-components';
@NgModule({
    declarations: [],
    imports: [BcpButtonModule, BcpIconModule, BcpAlertModule, BcpInputModule, BcpSelectInputModule],
    exports: [BcpButtonModule, BcpIconModule, BcpAlertModule, BcpInputModule, BcpSelectInputModule],
})
export class BcpuiModule {}
