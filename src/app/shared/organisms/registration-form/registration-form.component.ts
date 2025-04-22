import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../../atoms/atoms.module';

@Component({
  selector: 'registration-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AtomsModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  formGroup:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['Hola'],
    });
  }
  register() {
    console.log('a ver =>', this.formGroup.value);
  }
}
