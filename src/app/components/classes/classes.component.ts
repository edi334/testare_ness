import { Component, OnInit } from '@angular/core';
import {ClassModel} from '../../models/class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes: ClassModel[] = [
    {
      name: 'Transfiguration',
      students: [{name: 'Harry'}, {name: 'Ginny'}],
      teachers: [{name: 'Professor McGonagall'}]
    },
    {
      name: 'Potions',
      students: [{name: 'Ron'}, {name: 'Hermione'}],
      teachers: [{name: 'Professor Snape'}]
    },
    {
      name: 'Defense Against Dark Arts',
      students: [{name: 'Draco'}, {name: 'Cho'}],
      teachers: []
    }
  ];

  isGreen = true;

  constructor() { }

  ngOnInit(): void {
  }

  public FilterStudentsRon(classes: ClassModel[]): ClassModel[] {
    const newarr: ClassModel[] = [];
    for (const oneclass of classes) {
      for (const student of oneclass.students) {
        if (student.name === 'Ron') {
          newarr.push(oneclass);
        }
      }
    }
    return newarr;
  }

  public onClick(): void {
    this.classes.shift();
  }

}
