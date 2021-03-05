import {StudentModel} from './student.model';
import {TeacherModel} from './teacher.model';

export interface ClassModel {
  name: string;
  students: StudentModel[];
  teachers: TeacherModel[];
}
