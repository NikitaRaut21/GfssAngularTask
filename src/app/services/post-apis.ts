import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from 'buffer';
import { Constant } from '../Constants/const';

@Injectable({
  providedIn: 'root'
})
export class PostApis {
  // apiUrl="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient){
     
  }
 
  getAll():Observable<any>{
    return this.http.get(Constant.API_URL);
  }
   createPost(obj:any):Observable<any>{
    return this.http.post(Constant.API_URL,obj);
   }
   updatePost(id:any):Observable<any>{
    return this.http.put(Constant.API_URL,id);
   }

}


