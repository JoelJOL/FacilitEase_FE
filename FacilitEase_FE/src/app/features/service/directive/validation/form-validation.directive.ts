import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[appFormValidation]',
})
export class FormValidationDirective implements OnChanges {
  @Input() control: FormControl | AbstractControl | null = null;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control']) {
      this.updateValidationMessage();
    }
  }

  private updateValidationMessage(): void {
    const invalid = this.control?.invalid;
    const touchedOrDirty = this.control?.touched || this.control?.dirty;

    this.el.nativeElement.innerHTML = '';

    if (invalid && touchedOrDirty) {
      const errorMessage = document.createElement('span');
      errorMessage.classList.add('error-message');
      errorMessage.innerText = 'This field is required *';
      this.el.nativeElement.appendChild(errorMessage);
    }
  }
}
