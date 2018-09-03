import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatMenuModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieitemComponent } from './movieitem/movieitem.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    NavigationComponent,
    MovieitemComponent, ResultlistComponent
  ],
  declarations: [NavigationComponent, MovieitemComponent, ResultlistComponent]
})
export class HackflixUIModule { }
