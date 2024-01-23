import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tr-attachments',
  templateUrl: './tr-attachments.component.html',
  styleUrls: ['./tr-attachments.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrAttachmentsComponent),
      multi: true,
    },
  ],
})
export class TrAttachmentsComponent implements ControlValueAccessor {
  attachments: File[] = [];

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value) {
      this.attachments = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }

  handleFileChange(event: any) {
    const files: File[] = event.target.files;
    this.onChange(files);
    this.onTouched();
  }
}

