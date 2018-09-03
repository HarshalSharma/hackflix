import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Movie } from '../entities/Movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  moviesUrl = "http://starlord.hackerearth.com/movieslisting";
  data : any;
  dataObservable : BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { 
    this._http.get(this.moviesUrl).subscribe(
      (data : Movie[])=>{
        this.data = data;
        this.dataObservable.next(true);
      }
    )
  }
}
