import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BcpuiModule } from '../../bcpUi/bcpui.module';
import { FormUtils, noNumbersValidator } from '../../utils/form-utils';
import { SelectObject } from '@bcp/stl-ui-components';

@Component({
    selector: 'registration-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, BcpuiModule],
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
    formUtils = FormUtils;
    private fb = inject(FormBuilder);
    myForm: FormGroup = new FormGroup({});
    selectOptions: SelectObject[] = [
        { value: 1, name: 'DNI - Documento Nacional de Identidad', shortName: 'DNI' },
        { value: 2, name: 'CE - Carnet de extranjería', shortName: 'CE' },
    ];
    ngOnInit(): void {
        this.myForm = this.fb.group({
            name: [
                '',
                [
                    noNumbersValidator(),
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(50),
                ],
            ],
            lastName: [
                '',
                [
                    noNumbersValidator(),
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(50),
                ],
            ],
            secondName: [
                '',
                [noNumbersValidator(), Validators.minLength(3), Validators.maxLength(50)],
            ],
            selectDniCe: ['', [Validators.required]],
        });

        this.myForm.get('selectDniCe')?.valueChanges.subscribe(value => {
            console.log('value =>', value.selectValue);
            const documentType = value.selectValue;
            if (documentType === 1) {
                //
            } else if (documentType === 2) {
                //
            } else {
                //
            }

            //
        });
    }
    register() {
        console.log('a ver =>', this.myForm.value);
    }
}
