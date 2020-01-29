import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUserModel } from '../Models/IUserModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl: string = `${environment.api_url}`;
  constructor(private http: HttpClient) { }


  getAllUser(): Observable<IUserModel[]> {
    let apiUrl = this.baseurl + 'Users';
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  getUserByRepositoryPattern(): Observable<IUserModel[]>{
    let apiUrl = this.baseurl + 'GetAllUser';
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  getUsersUsingSP(): Observable<IUserModel[]>{
    let apiUrl = this.baseurl + 'GetAllUserBySP';
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  createUser(data: IUserModel){
    let apiUrl = this.baseurl + 'PostUsers';
    return this.http.post(apiUrl, data, httpOptions).pipe(
      map((res: Response) => res));
  }

}
