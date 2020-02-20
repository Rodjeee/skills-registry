import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject} from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { SkillCategory } from '../models/skill-category.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SkillCategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllSkillCategory(): Observable<SkillCategory[]> {
    return this.httpClient.get<SkillCategory[]>(environment.skillCategoryUrl + '/').pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }
}
