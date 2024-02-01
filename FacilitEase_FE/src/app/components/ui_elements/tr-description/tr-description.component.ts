import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
@Component({
  selector: 'app-tr-description',
  templateUrl: './tr-description.component.html',
  styleUrls: ['./tr-description.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrDescriptionComponent),
      multi: true,
    },
  ],
})
export class TrDescriptionComponent implements ControlValueAccessor {
  @Output() descriptionChange = new EventEmitter<string>();
  @Input() label: string = 'Description';
  onDescriptionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.descriptionChange.emit(value);
  }
  control = new FormControl('');
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  onInput() {
    this.onChange(this.control.value);
  }
  onBlur() {
    this.onTouched();
  }
}
