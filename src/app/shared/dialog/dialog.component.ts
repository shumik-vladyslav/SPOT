import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() question;
  @Output() result = new EventEmitter;
  constructor() { }
  answer(event) {
    this.result.emit(event);
  }
  ngOnInit() {
  }

}
