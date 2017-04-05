import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FetchMovie provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FetchMovie {
public movies=[];
  constructor(public http: Http) {
    console.log('Hello FetchMovie Provider');

  }

 public fetchUpcoming(){
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=980ad0a8e9d8416b45ddef0f7f5e3155&language=en-US&page=1").map(res=>
      res.json());
  }
  public fetchPopular(){
   return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=980ad0a8e9d8416b45ddef0f7f5e3155&language=en-US&page=1").map(res=>res.json());
  }

}
