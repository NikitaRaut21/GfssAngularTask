import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApis {
  apiUrl="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient){
     
  }
 
  getAll():Observable<any>{
    return this.http.get(this.apiUrl);
  }
   createPost(obj:any):Observable<any>{
    return this.http.post(this.apiUrl,obj);
   }
   updatePost(id:any):Observable<any>{
    return this.http.put(this.apiUrl,id);
   }

}


