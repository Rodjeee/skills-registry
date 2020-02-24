import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Skill } from '../../models/skills/skill.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) { }

  getAllSkillsInCategory(skillCategoryID: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(environment.skillUrl + '/' + `${skillCategoryID}` + '/list').pipe(
      catchError((error:HttpErrorResponse) => throwError(error)));
  }

  getAllSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(environment.skillUrl + '/').pipe(
      catchError((error:HttpErrorResponse) => throwError(error)));
  }

  addNewSkillToCategory(Name, skillCategoryID: string): Observable<Skill> {
    const newSkill = {
      Name,
      skillCategoryID
    }
    return this.httpClient.post<Skill>(environment.skillUrl + '/', newSkill, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    )
  }
}
