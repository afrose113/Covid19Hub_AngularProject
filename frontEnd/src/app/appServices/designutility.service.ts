import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignutilityService {
  httpClient: any;
  constructor(private http: HttpClient) {
    this.userDetails().subscribe((res)=>this.userArray=res);
    this.observable=of(this.userArray)
  }
  userArray:any;
  observable:any;

  setUsers(data:any):void{
      this.userArray.push(data);
      console.log(this.userArray);
  }

  getposts():Observable<any>{
      const observable=of(this.userArray);
      return observable;
  }
  url="https://fakestoreapi.com/users";
  userDetails():Observable<any>{
      return this.http.get(this.url)
  }
  product(): Observable<any> {
    return this.http.get('https://covid2019-api.herokuapp.com/v2/current');
  }
  message:any;
  
  vaccination():Observable<any>
  {
    return this.http.get('https://api.rootnet.in/covid19-in/contacts');
  }
  
  sendData(registerObj: { fname: string; add: string; phNo: string ; state: string; country:string;amount:string   })
  {
  
    this.http.post('http://localhost:8008/api/covid',registerObj).subscribe(res =>{
      console.log(res);
      this.message=res;
    });

  }
  
  url1='http://localhost:8008/api/covid';
  apicall():Observable<any>
  {
    return this.http.get(this.url1)
  }

}
