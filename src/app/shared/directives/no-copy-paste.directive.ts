import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noCopyPaste]',
  standalone: true
})
export class NoCopyPasteDirective {
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  @HostListener('copy', ['$event'])
  onCopy(event: ClipboardEvent) {
    event.preventDefault();
  }

  @HostListener('cut', ['$event'])
  onCut(event: ClipboardEvent) {
    event.preventDefault();
  }
}