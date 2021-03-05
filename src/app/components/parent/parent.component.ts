import {Component, OnInit} from '@angular/core';
import {ClassesService} from '../../services/classes.service';
import {ClassModel} from '../../models/class.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  name = 'Parent';
  classes: ClassModel[] | undefined;

  constructor(public classesService: ClassesService) {
    this.classesService.getClasses().subscribe((classes: ClassModel[]) => {
        this.classes = classes;
    });
  }

  // tslint:disable-next-line:typedef
  public async ngOnInit() {
  }

  clickFuntion(): void {
    console.log('pressed');
  }
}
