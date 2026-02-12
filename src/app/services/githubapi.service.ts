import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Project } from '../interfaces/project.interface'

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private apiUrl = 'assets/projects.json'


  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
