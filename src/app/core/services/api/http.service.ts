import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public baseUrl = environment.base_url;
  constructor(
    @Inject(Injector) protected injector: Injector,
    @Inject('controller') protected controller: string
  ) {}
  get(methodName: string, query?: any, headers?: any) {
    if (query) {
      let params = new HttpParams();
      for (const [key, value] of Object.entries(query)) {
        if (value != undefined) {
          params = params.set(`${key}`, `${value}`);
        }
      }
      return this.http.get(`${this.baseUrl}${this.controller}/${methodName}`, {
        params: params,
        headers: headers,
      });
    }
    return this.http.get(`${this.baseUrl}${this.controller}/${methodName}`);
  }
  getById(methodName: string, id: string, params?: HttpParams) {
    return this.http.get(
      `${this.baseUrl}${this.controller}/${methodName}/${id}`,
      { params: params }
    );
  }
  post(methodName: string, data: any) {
    return this.http.post(
      `${this.baseUrl}${this.controller}/${methodName}`,
      data
    );
  }
  put(methodName: string, data: any) {
    return this.http.put(
      `${this.baseUrl}${this.controller}/${methodName}`,
      data
    );
  }
  delete(methodName: string, id: any) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.delete(`${this.baseUrl}${this.controller}/${methodName}`, {
      params: params,
    });
  }
  patch(methodName: string, data: any, id: string) {
    return this.http.patch(
      `${this.baseUrl}${this.controller}/${methodName}/${id}`,
      data
    );
  }
  protected get http(): HttpClient {
    return this.injector.get(HttpClient);
  }
}
