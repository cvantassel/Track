import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string;

  constructor(public http: HttpClient) {
    this.endpoint = "http://localhost:5000"
  }

  postItem(postItemBody: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.endpoint + '/postItem/',
        JSON.stringify(postItemBody),
        {
          headers: { 'Content-Type': 'application/json' },
          responseType: 'text'
        }
      ).subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      })
    })
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

  handleScan(link) {
    return new Promise((resolve, reject) => {
      this.http.get(link, {responseType: 'text'})
        .subscribe((response: any) => {
          resolve(response);
        }, error => {
          reject(error);
        })
    })
  }

}
