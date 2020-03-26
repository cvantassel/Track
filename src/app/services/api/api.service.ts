import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string;

  constructor(public http: HttpClient) {
    this.endpoint = "http://localhost:5000/"
    }
  
  getProjectData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.endpoint + '/getProjects/')
      .subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    })
  }

}
