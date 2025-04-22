import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { BcpuiModule } from '../../bcpUi/bcpui.module';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-text',
  standalone: true,
  imports: [CommonModule, BcpuiModule,ReactiveFormsModule,NgClass],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() label = 'labelText';
  formControl!: FormControl;
  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;

  constructor(@Optional() @Self() private ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.ngControl) {
      this.formControl = this.ngControl.control as FormControl;
    }
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Método para actualizar el valor y notificar
  updateValue(event: any): void {
    this.value = event;
    this.onChange(event);
    this.onTouched();
  }
}
