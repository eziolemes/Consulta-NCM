import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';


@Injectable({
  providedIn: 'root'
})
export class NCMServiceService {

  constructor(private http: HttpClient) { }

  getNCMList(ncm): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + ncm);
  }
}