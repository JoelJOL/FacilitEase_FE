import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tr-subject',
  templateUrl: './tr-subject.component.html',
  styleUrls: ['./tr-subject.component.css'],
    
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrSubjectComponent),
      multi: true,
    },
  ],
})

  export class TrSubjectComponent implements ControlValueAccessor {
    // subject: string = '';
  
    // onChange = (value: any) => {};
    // onTouched = () => {};
  
    // writeValue(value: any): void {
    //   this.subject = value;
    // }
  
    // registerOnChange(fn: any): void {
    //   this.onChange = fn;
    // }
  
    // registerOnTouched(fn: any): void {
    //   this.onTouched = fn;
    // }
  
    // setDisabledState(isDisabled: boolean): void {
    //   // Implement if needed
    // }
  
    // handleChange(value: any) {
    //   this.onChange(value);
    //   this.onTouched();
    // }
    control = new FormControl('');
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    // Implement how your component sets the initial value
    this.control.setValue(value);
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
