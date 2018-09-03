import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.css']
})
export class ResultlistComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() movies : Array<any> = new Array();


  menuNames : Array<string> = new Array();
  shownMovies : Array<any> = new Array();
  size = 6;
  searchbar : string;

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.movies.length>0){
      this.size = 6;
      this.updateShowMovies();
      
    }
  }


  updateShowMovies(){
    this.shownMovies = this.movies.slice(0,this.size);
  }

  loadMore(){
    this.size += 6;
    this.updateShowMovies();
  }

}
