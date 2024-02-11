import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '@app/components/layout/modal/modal.component';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Output() action = new EventEmitter<string>();
  @Input() icon: string='';
  @Input() disabled: boolean = false;

  handleClick(): void {
    this.action.emit();
  }
}
