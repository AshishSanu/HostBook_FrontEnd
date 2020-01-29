import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBulkRecordModel } from '../Models/IBulkRecodModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class BulkrecordService {
  private baseurl: string = `${environment.api_url}`;
  constructor(private http: HttpClient) { }


  getRecoerdsByIndex(firstIndex: number, lastIndex: number): Observable<IBulkRecordModel[]> {
    let apiUrl = this.baseurl + 'GetBulkRecord?fisrt='+firstIndex+'&last='+lastIndex;
    return this.http.get(apiUrl,httpOptions).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
}
