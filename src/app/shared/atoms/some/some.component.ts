import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcpuiModule } from '../../bcpUi/bcpui.module';
import { AccessibleIcon } from '@bcp/ng-ui-components/types';
import { AccessibleAlert } from '@bcp/ng-ui-components/types';
@Component({
  selector: 'some',
  standalone: true,
  imports: [CommonModule, BcpuiModule],
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SomeComponent {
  accessibleConfigIcon: AccessibleIcon = { iconAccessibleName: 'Confirmación' };
  accessibleConfigIcon1: AccessibleIcon = { iconAccessibleName: 'Atención' };
  accessibleConfigIcon2: AccessibleIcon = { iconAccessibleName: 'Advertencia' };
  accessibleConfigIcon3: AccessibleIcon = {
    iconAccessibleName: 'Error',
  };

  accessibleConfigAriaLabel: AccessibleAlert = {
    closeButtonAriaLabel: 'Cerrar',
    closeButtonAriaDescribedby: 'alertSpanSrOnlyAria2',
  };
  accessibleConfigAriaLabelledby: AccessibleAlert = {
    closeButtonAriaLabelledby: 'alertSpanSrOnlyAria1',
    closeButtonAriaDescribedby: 'alertSpanSrOnlyAria2',
  };
/*   accessibleConfigIcon: AccessibleIcon = { iconAccessibleName: 'Confirmación' };
  accessibleConfigIcon1: AccessibleIcon = { iconAccessibleName: 'Atención' };
  accessibleConfigIcon2: AccessibleIcon = { iconAccessibleName: 'Advertencia' };

  accessibleConfigIcon3: AccessibleIcon = {
    iconAccessibleName: 'Error',
  }; */
}
