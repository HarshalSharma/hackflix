import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _data : DataService) { }

  movies: Array<any> = new Array();

  ngOnInit() {

    this._data.dataObservable.subscribe((state)=>{
      if(state){
        this.movies = this._data.data;
      }
    })


  }



}
