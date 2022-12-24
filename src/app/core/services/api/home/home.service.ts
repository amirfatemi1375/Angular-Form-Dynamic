import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url: string = '/assets/json/data.json';
  constructor(private http: HttpClient) {}
  getFormFields() {
    return this.http.get(this.url);
  }
}
