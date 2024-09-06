import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  //mapping api with backend
  api: string = 'http://localhost:4040/projectInfo';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: { 'Content-Type': 'application/json' },
  };

  //saving project
  saveProject(project: Project): Observable<string> {
    return this.http.post<string>(this.api, project, {
      responseType: 'text' as 'json',
    });
  }

  //update the project info
  updateProject(projectId: number, project: Project): Observable<string> {
    return this.http.put<string>(
      this.api.concat('/').concat(projectId + ''),
      project,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  //getting project list
  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(this.api, this.httpOptions);
  }

  // deleting project
  deleteProject(projectId: number): Observable<string> {
    return this.http.delete<string>(
      this.api.concat('/').concat(projectId + ''),
      { responseType: 'text' as 'json' }
    );
  }

  //getting single project based on id
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.api.concat('/').concat(id + ''));
  }
}
