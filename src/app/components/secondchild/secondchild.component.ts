import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassModel} from '../../models/class.model';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.scss']
})
export class SecondChildComponent implements OnInit{
  @Input() classes: ClassModel[] | undefined;
  @Output() clickLog: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
      this.clickLog.emit();
  }
}
