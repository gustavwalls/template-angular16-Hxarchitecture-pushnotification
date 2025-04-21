import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SomeComponent
  ],
  exports:[
    SomeComponent
  ]
})
export class AtomsModule { }
