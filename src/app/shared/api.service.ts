import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //now here i will define the get, post,get ,put,delete


  //creating Restaurent post method
  PostRestaurent(data: any) {
    return this.http.post<any>("http://localhost:3000/posts/", data)
     }
  //get restaurent using get method
  GetRestaurent() {
    return this.http.get<any>('http://localhost:3000/posts')
  }
  //Update restaurent using put method
  updateRestaurent(  id:any,data: any) {
    return this.http.put<any>('http://localhost:3000/posts/'+id,data)
    
  }
  
  //delete restaurent using delete method
 DeleteRestorent(id:any) {
    return this.http.delete<any>('http://localhost:3000/posts/'+id)
    
    }

  }

