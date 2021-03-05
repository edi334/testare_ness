import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClassModel} from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(
    private http: HttpClient
  ) { }

  private classesUrl = 'api/classes';

  getClasses(): Observable<ClassModel[]> {
    return this.http.get<ClassModel[]>(this.classesUrl);
  }

  postClass(newclass: ClassModel): Observable<ClassModel> {
    return this.http.post<ClassModel>(this.classesUrl, newclass);
  }

}
