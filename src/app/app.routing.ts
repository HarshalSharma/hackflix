import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from "./notfound/notfound.component";
import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '**', component: NotfoundComponent }
  ];
  
export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true
});   