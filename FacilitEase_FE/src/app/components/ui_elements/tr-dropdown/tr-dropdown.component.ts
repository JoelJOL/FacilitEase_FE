import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tr-dropdown',
  templateUrl: './tr-dropdown.component.html',
  styleUrls: ['./tr-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrDropdownComponent),
      multi: true
    }
  ]
})

export class TrDropdownComponent  implements ControlValueAccessor  {
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() displayKey: string = ''; 
  control = new FormControl('');
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    // Implement how your component sets the initial value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement how your component handles disabling
  }

  // 
  onInput(){

    this.onChange(this.control.value)
  }
  onBlur(){
    this.onTouched();
  }

}
