import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private composeUrl(url:string):string{
    return `${environment.host}/${url}`
  }
  constructor(private http:HttpClient) { }
  login(formData:any):Observable<any>{
    console.log("form data is here");
    
    console.log(formData);
    return this.http.post<any>(this.composeUrl('admin'),formData)
  }
}
