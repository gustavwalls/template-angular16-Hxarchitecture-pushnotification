import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some/some.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
    declarations: [],
    imports: [CommonModule, SomeComponent, InputTextComponent],
    exports: [SomeComponent, InputTextComponent],
})
export class AtomsModule {}
