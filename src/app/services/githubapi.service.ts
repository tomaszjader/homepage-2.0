import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Project} from '../interface/project'

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private apiUrl ='https://api.github.com/users/tomaszjader/repos'
  
  
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Project[]>(this.apiUrl,  {
      headers: {
        'Content-Type': 'application/json'
      }
  });
  }
}
