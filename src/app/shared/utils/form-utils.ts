import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
export class FormUtils {
    static getTextError(errors: ValidationErrors, fieldName: string = 'Este campo'): string | null {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return `${fieldName} es requerido.`;

                case 'hasNumber':
                    return `${fieldName} no debe contener números.`;

                case 'minlength':
                    return `${fieldName} debe tener mínimo ${errors['minlength'].requiredLength} caracteres.`;

                case 'maxlength':
                    return `${fieldName} debe tener máximo ${errors['maxlength'].requiredLength} caracteres.`;

                case 'min':
                    return `${fieldName} debe ser mayor o igual a ${errors['min'].min}.`;

                default:
                    return null;
            }
        }
        return null;
    }

    static isValidField(form: FormGroup, fieldName: string): boolean | null {
        return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
    }

    static getFieldError(
        form: FormGroup,
        fieldName: string,
        displayName: string = fieldName,
    ): string | null {
        if (!form.controls[fieldName]) return null;

        const errors = form.controls[fieldName].errors ?? {};
        return FormUtils.getTextError(errors, displayName);
    }
}

export function noNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const hasNumber = /\d/.test(control.value);
        return hasNumber ? { hasNumber: { value: control.value } } : null;
    };
}
