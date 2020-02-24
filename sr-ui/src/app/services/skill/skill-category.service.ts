import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { SkillCategory } from '../../models/skills/skill-category.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SkillCategoryService {
  
  skillCategoryID: string;
  receivedFilter: EventEmitter<string>;

  constructor(private httpClient: HttpClient) {
    this.receivedFilter = new EventEmitter<string>();
   }

  getAllSkillCategory(): Observable<SkillCategory[]> {
    return this.httpClient.get<SkillCategory[]>(environment.skillCategoryUrl + '/').pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getSkillCategoryById(skillCategoryID: string): Observable<SkillCategory[]> {
    return this.httpClient.get<SkillCategory[]>(environment.skillCategoryUrl + '/' + `${skillCategoryID}`).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  createSkillCategory(Name): Observable<SkillCategory> {
    const skillCategory = {
      Name
    };
    return this.httpClient.post<SkillCategory>(environment.skillCategoryUrl + '/', skillCategory, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  updateSkillCategory(skillCategoryID: string, Name): Observable<any> {
    const skillCategory = {
      Name
    };
    return this.httpClient.put(environment.skillCategoryUrl + '/' + `${skillCategoryID}`, skillCategory, httpOptions).pipe(
      catchError((error:HttpErrorResponse) => throwError(error))
    );
  }
  
  deleteSkillCategory(skillCategoryID): Observable<SkillCategory> {
    return this.httpClient.delete<SkillCategory>(environment.skillCategoryUrl + '/'  + `${skillCategoryID}`, httpOptions).pipe(
      catchError((error:HttpErrorResponse) => throwError(error))
    )
  }

  raiseEvent(id: string): void {
    this.skillCategoryID = id;
    this.receivedFilter.emit(id);
  }

}