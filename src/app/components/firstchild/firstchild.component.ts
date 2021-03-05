import {Component, Input, OnInit} from '@angular/core';
import {ClassModel} from '../../models/class.model';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstChildComponent implements OnInit{
  @Input() name: string | undefined;
  @Input() classes: ClassModel[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
