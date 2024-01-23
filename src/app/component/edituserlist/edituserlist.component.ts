import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edituserlist',
  templateUrl: './edituserlist.component.html',
  styleUrls: ['./edituserlist.component.css']
})
export class EdituserlistComponent {
  @Input() visible: boolean = false;
  @Input() customerName: string = '';
  @Output() closed = new EventEmitter<void>();


  constructor() { }

  closeDialog(): void { 
    this.visible = false
    this.closed.emit();
  }
}
